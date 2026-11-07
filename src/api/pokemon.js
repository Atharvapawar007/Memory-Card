import { shuffle } from '../utils/shuffle'

const API_URL = 'https://pokeapi.co/api/v2/pokemon'
const POOL_SIZE = 200

async function fetchPokemon(id, signal) {
  const response = await fetch(`${API_URL}/${id}`, { signal })
  if (!response.ok) throw new Error(`PokéAPI responded with ${response.status}`)

  const { name, sprites } = await response.json()
  const image =
    sprites.other?.['official-artwork']?.front_default ?? sprites.front_default

  return { id, name, image }
}

export async function fetchRandomPokemons(count, signal) {
  const ids = shuffle(Array.from({ length: POOL_SIZE }, (_, i) => i + 1)).slice(
    0,
    count,
  )
  return Promise.all(ids.map((id) => fetchPokemon(id, signal)))
}
