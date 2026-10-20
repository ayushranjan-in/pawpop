import { defineConfig, type Plugin, type PreviewServer, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage } from 'node:http'
import type { Duplex } from 'node:stream'

// The dev and preview servers answer this machine only. Four layers enforce it:
// the loopback bind, a peer-address check and a Host-header check on every
// request and socket upgrade, and a startup check that exits when the bound
// address is not loopback (for example after someone passes `--host`).
// Remote access, if ever needed, goes through an SSH tunnel, never a network mode.
const LOOPBACK_HOST = '127.0.0.1'
const DEV_PORT = 5173
const PREVIEW_PORT = 4173

const LOOPBACK_ADDRESSES = new Set(['127.0.0.1', '::1', '::ffff:127.0.0.1'])
const LOOPBACK_HOST_NAMES = new Set(['localhost', '127.0.0.1', '::1'])

function hostNameOf(hostHeader: string): string {
  if (hostHeader.startsWith('[')) return hostHeader.slice(1, hostHeader.indexOf(']'))
  return hostHeader.split(':')[0]
}

function isLocalRequest(req: IncomingMessage): boolean {
  const peer = req.socket.remoteAddress
  const hostHeader = req.headers.host
  return (
    peer !== undefined &&
    LOOPBACK_ADDRESSES.has(peer) &&
    hostHeader !== undefined &&
    LOOPBACK_HOST_NAMES.has(hostNameOf(hostHeader))
  )
}

function guardLocalOnly(server: ViteDevServer | PreviewServer): void {
  const httpServer = server.httpServer
  if (!httpServer) return

  httpServer.on('listening', () => {
    const bound = httpServer.address()
    if (bound === null || typeof bound === 'string' || !LOOPBACK_ADDRESSES.has(bound.address)) {
      console.error(`[local-only] Refusing to serve: bound to ${JSON.stringify(bound)}, which is not loopback.`)
      process.exit(1)
    }
  })

  httpServer.prependListener('upgrade', (req: IncomingMessage, socket: Duplex) => {
    if (!isLocalRequest(req)) socket.end('HTTP/1.1 403 Forbidden\r\n\r\n')
  })

  server.middlewares.use((req, res, next) => {
    if (isLocalRequest(req)) return next()
    res.statusCode = 403
    res.end('The PawPop dev server answers this machine only.')
  })
}

function localOnly(): Plugin {
  return {
    name: 'pawpop-local-only',
    configureServer: guardLocalOnly,
    configurePreviewServer: guardLocalOnly,
  }
}

export default defineConfig({
  plugins: [react(), localOnly()],
  server: { host: LOOPBACK_HOST, port: DEV_PORT, strictPort: true },
  preview: { host: LOOPBACK_HOST, port: PREVIEW_PORT, strictPort: true },
})
