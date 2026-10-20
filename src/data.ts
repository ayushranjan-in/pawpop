// Mock data for the prototype. Every person, dog, place, and session here is
// invented for demonstration; the journey and rules follow docs/pawpop-product.txt.

export type PlayStyle = 'Chaser' | 'Wrestler' | 'Sniffer' | 'Ball fanatic' | 'Prefers people'
export type DogSociability = 'Loves everyone' | 'Picky' | 'Nervous' | 'Prefers no dogs'

export type DogProfile = {
  name: string
  breed: string
  age: string
  size: 'Small' | 'Medium' | 'Large'
  sex: 'Female' | 'Male'
  neutered: boolean
  sociability: DogSociability
  playStyle: PlayStyle
  energy: 'Low' | 'Medium' | 'High'
  loves: string
  avoids: string
  scaredOf: string
  food: string
  health: string
  routine: string
  vouch: string
}

export type PersonProfile = {
  name: string
  neighborhood: string
  aloneHours: string
  needs: string[]
  building: 'Doorman building' | 'Walk-up' | 'Elevator, no doorman' | 'House'
  experience: 'First dog' | 'A few dogs' | 'Lifelong'
  learn: string
}

export const STARTER_DOG: DogProfile = {
  name: 'Biscuit',
  breed: 'French bulldog mix',
  age: '3 years',
  size: 'Small',
  sex: 'Female',
  neutered: true,
  sociability: 'Picky',
  playStyle: 'Sniffer',
  energy: 'Medium',
  loves: 'small calm dogs and the grass by the river',
  avoids: 'big bouncy dogs who rush at me',
  scaredOf: 'elevators and loud trucks',
  food: 'Chicken makes me itch.',
  health: 'Healthy, allergic to chicken. Vet: Dr. Lee, W 112th St.',
  routine: 'Walks at 7:30 a.m. and 6:30 p.m. Naps all afternoon.',
  vouch: 'Jordan (neighbor), Rosa T. (sitter)',
}

export const EMPTY_DOG: DogProfile = {
  name: '',
  breed: '',
  age: '',
  size: 'Small',
  sex: 'Female',
  neutered: true,
  sociability: 'Picky',
  playStyle: 'Sniffer',
  energy: 'Medium',
  loves: '',
  avoids: '',
  scaredOf: '',
  food: '',
  health: '',
  routine: '',
  vouch: '',
}

export const EMPTY_PERSON: PersonProfile = { name: '', neighborhood: '', aloneHours: '', needs: [], building: 'Walk-up', experience: 'First dog', learn: '' }

export const STARTER_PERSON: PersonProfile = {
  name: 'Maya',
  neighborhood: 'Morningside Heights',
  aloneHours: '9 a.m. to 6 p.m. on weekdays',
  needs: ['Play with the right dogs', 'A sitter I can trust'],
  building: 'Walk-up',
  experience: 'First dog',
  learn: 'How to read when Biscuit is getting nervous',
}

export const NEED_OPTIONS = [
  'Play with the right dogs',
  'Midday walks',
  'A sitter I can trust',
  'Travel cover',
  'A groomer or daycare that suits my dog',
  'Dog-friendly places',
]

export type Session = {
  id: string
  day: string
  time: string
  place: string
  distance: string
  spotsLeft: number
  host: string
  kind: 'First Sniff' | 'Quiet Pop'
}

export const FIRST_SNIFFS: Session[] = [
  { id: 's1', day: 'Saturday, Oct 24', time: '9:00 to 9:45 a.m.', place: 'Church hall, W 114th St', distance: '6 min walk', spotsLeft: 2, host: 'Dana R., CPDT-KA', kind: 'First Sniff' },
  { id: 's2', day: 'Sunday, Oct 25', time: '8:00 to 8:45 a.m.', place: 'Riverside Park dog run at 105th St (quiet hour)', distance: '9 min walk', spotsLeft: 4, host: 'Luis M., CPDT-KA', kind: 'First Sniff' },
  { id: 's3', day: 'Tuesday, Oct 27', time: '7:00 to 7:45 p.m.', place: 'School yard, W 109th St', distance: '4 min walk', spotsLeft: 3, host: 'Dana R., CPDT-KA', kind: 'First Sniff' },
]

export const QUIET_POPS: Session[] = [
  { id: 'q1', day: 'Saturday, Oct 24', time: '10:00 to 10:30 a.m.', place: 'Church hall, W 114th St (private)', distance: '6 min walk', spotsLeft: 1, host: 'Dana R., CPDT-KA', kind: 'Quiet Pop' },
]

export type Friend = { dog: string; owner: string; breed: string; note: string; emoji: string }

export const MATCHES: Friend[] = [
  { dog: 'Pepper', owner: 'Jordan', breed: 'Beagle, 4', note: 'Played sniff-and-chase with Biscuit for 20 minutes.', emoji: '🐕' },
  { dog: 'Mochi', owner: 'Priya', breed: 'Pug, 2', note: 'Calm, parallel sniffing. A good walking buddy.', emoji: '🐶' },
  { dog: 'Olive', owner: 'Sam', breed: 'Australian shepherd mix, 6', note: 'Gentle. Biscuit relaxed around her within minutes.', emoji: '🦮' },
]

export type Recommendation = {
  category: 'Sitter' | 'Groomer' | 'Daycare' | 'Vet' | 'Place'
  name: string
  detail: string
  fromDogs: string
  wouldReturn: string
  lastUsed: string
  checkedByHost: boolean
}

export const RECOMMENDATIONS: Recommendation[] = [
  { category: 'Sitter', name: 'Rosa T. (home sitter)', detail: 'Small dogs only, quiet apartment, W 110th St', fromDogs: '3 calm small dogs within 10 blocks', wouldReturn: '3 of 3 would book again', lastUsed: 'Used 2 weeks ago by Pepper', checkedByHost: true },
  { category: 'Sitter', name: 'Ben K. (drop-in visits)', detail: 'Two visits a day, small and senior dogs', fromDogs: '2 picky small dogs within 10 blocks', wouldReturn: '2 of 2 would book again', lastUsed: 'Used last month by Olive', checkedByHost: false },
  { category: 'Vet', name: 'Riverside Animal Clinic', detail: 'Fear-free handling, written estimates before treatment', fromDogs: '6 small dogs nearby', wouldReturn: '5 of 6 would go back', lastUsed: 'Visited last week by Pepper', checkedByHost: true },
  { category: 'Groomer', name: 'Little Paws Grooming', detail: 'Hand-dry option for dogs scared of dryers', fromDogs: '4 nervous small dogs nearby', wouldReturn: '4 of 4 would go back', lastUsed: 'Used last week by Olive', checkedByHost: true },
  { category: 'Daycare', name: 'Westside Small Dog Den', detail: 'Separate room for small, low-energy dogs', fromDogs: '2 picky dogs like Biscuit', wouldReturn: '1 of 2 would go back', lastUsed: 'Used last month by Mochi', checkedByHost: false },
  { category: 'Place', name: 'Corner cafe patio, Amsterdam Ave', detail: 'Outdoor tables, quiet before 10 a.m.', fromDogs: '5 small dogs nearby', wouldReturn: '5 of 5 recommend', lastUsed: 'Visited yesterday by Mochi', checkedByHost: false },
]

