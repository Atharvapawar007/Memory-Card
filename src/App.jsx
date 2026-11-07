import Board from './Board'
import { usePokemons } from './hooks/usePokemons'

const CARD_COUNT = 16

function App() {
  const { pokemons, loading, error, reload } = usePokemons(CARD_COUNT)

  if (loading) {
    return (
      <p className="notice" role="status">
        Catching Pokémon…
      </p>
    )
  }

  if (error) {
    return (
      <div className="notice" role="alert">
        <p>Couldn't load Pokémon. Check your connection and try again.</p>
        <button type="button" onClick={reload}>
          Retry
        </button>
      </div>
    )
  }

  return <Board pokemons={pokemons} />
}

export default App
