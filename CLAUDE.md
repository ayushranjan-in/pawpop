# PawPop

A Columbia "User Centric Design and Innovation" semester project about dogs and pets in New York City, plus the interactive 3D website that presents it. The live plan and progress cursor are in `docs/plan.md`; read it first.

## Rules

- Never run `git commit` or `git push` until the owner explicitly says so. Leave work as uncommitted changes.
- Research claims need sources. The interviews in `research/interviews.md` are real; quote them exactly.

## Stack

Vite 8, React 19, three.js, React Three Fiber, drei, TypeScript 7. `npm run dev` serves the site; `npm run build` typechecks and bundles; `npm run snapshot` takes screenshots through Brave with playwright-core.

## PORTS

| Port | What listens | May a session stop it? |
|---|---|---|
| 5173 | Vite dev server (`npm run dev`), bound to 127.0.0.1 only | Yes, if this project's session started it |
| 4173 | Vite preview server (`npm run preview`), bound to 127.0.0.1 only | Yes, if this project's session started it |

Both servers refuse non-loopback peers and non-local Host headers, and exit at startup if bound to anything but loopback (`vite.config.ts`). Never add `--host` or a network bind; use an SSH tunnel for remote access.
