import { useCallback, useEffect, useState } from 'react'
import { fetchRandomPokemons } from '../api/pokemon'

export function usePokemons(count) {
  const [state, setState] = useState({
    pokemons: [],
    loading: true,
    error: null,
  })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    fetchRandomPokemons(count, controller.signal)
      .then((pokemons) => setState({ pokemons, loading: false, error: null }))
      .catch((error) => {
        if (error.name === 'AbortError' || error.name === 'CanceledError')
          return
        setState({ pokemons: [], loading: false, error })
      })

    return () => controller.abort()
  }, [count, attempt])

  const reload = useCallback(() => {
    setState({ pokemons: [], loading: true, error: null })
    setAttempt((n) => n + 1)
  }, [])

  return { ...state, reload }
}
