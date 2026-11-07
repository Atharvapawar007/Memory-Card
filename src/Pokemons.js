import axios from 'axios'

const Pokemons = []

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[items[i], items[randomIndex]] = [items[randomIndex], items[i]]
  }

  return items
}

export function shufflePokemons() {
  return shuffle(Pokemons)
}

const pokemonIds = shuffle(Array.from({ length: 200 }, (_, index) => index + 1))

for (let i = 0; i < 16; i++) {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonIds[i]}`,
  )

  const Pokemon = {
    id: i,
    name: response.data.name,
    image: response.data.sprites.front_default,
    isClicked: false,
  }

  Pokemons.push(Pokemon)
}

export default Pokemons
