import type { DogProfile } from './data'

// Writes the dog's profile back in the dog's own voice, the way the
// product brief describes it ("I'm Teo. I love slow sniffers..."). Empty
// fields are skipped so the profile can build up live while the owner types.
export function dogVoice(dog: DogProfile): string[] {
  const lines: string[] = []
  const name = dog.name.trim() || 'your dog'
  const what = [dog.size.toLowerCase(), dog.breed.trim() || 'dog'].join(' ')
  lines.push(dog.age.trim() ? `I'm ${name}, a ${what}, ${dog.age.trim().toLowerCase()} old.` : `I'm ${name}, a ${what}.`)
  if (dog.loves.trim()) lines.push(`I love ${dog.loves.trim()}.`)
  if (dog.avoids.trim()) lines.push(`Please keep me away from ${dog.avoids.trim()}.`)
  if (dog.scaredOf.trim()) lines.push(`I get scared of ${dog.scaredOf.trim()}.`)
  const playLine: Record<DogProfile['playStyle'], string> = {
    Chaser: 'My favorite game is chase.',
    Wrestler: 'I like to wrestle, gently.',
    Sniffer: 'I would rather sniff than run.',
    'Ball fanatic': 'Throw the ball. Then throw it again.',
    'Prefers people': 'Honestly, I like people more than dogs.',
  }
  lines.push(playLine[dog.playStyle])
  if (dog.food.trim()) lines.push(dog.food.trim())
  return lines
}
