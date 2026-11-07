import { useEffect, useReducer } from 'react'
import { shuffle } from '../utils/shuffle'

const BEST_SCORE_KEY = 'memory-card:best-score'

function loadBestScore() {
  try {
    return Number(localStorage.getItem(BEST_SCORE_KEY)) || 0
  } catch {
    return 0
  }
}

function init(pokemons) {
  return {
    cards: shuffle(pokemons),
    clicked: [],
    bestScore: loadBestScore(),
    status: 'playing', // 'playing' | 'lost' | 'won'
    lastClicked: null,
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'pick': {
      if (state.status === 'won') return state
      const pokemon = action.pokemon

      if (state.clicked.includes(pokemon.id)) {
        return {
          ...state,
          cards: shuffle(state.cards),
          clicked: [],
          status: 'lost',
          lastClicked: pokemon,
        }
      }

      const clicked = [...state.clicked, pokemon.id]
      return {
        ...state,
        cards: shuffle(state.cards),
        clicked,
        bestScore: Math.max(state.bestScore, clicked.length),
        status: clicked.length === state.cards.length ? 'won' : 'playing',
        lastClicked: pokemon,
      }
    }
    case 'restart':
      return { ...init(state.cards), bestScore: state.bestScore }
    default:
      return state
  }
}

export function useGame(pokemons) {
  const [state, dispatch] = useReducer(reducer, pokemons, init)

  useEffect(() => {
    try {
      localStorage.setItem(BEST_SCORE_KEY, String(state.bestScore))
    } catch {
      // Storage unavailable (private mode, quota); best score just won't persist.
    }
  }, [state.bestScore])

  return {
    cards: state.cards,
    score: state.clicked.length,
    bestScore: state.bestScore,
    status: state.status,
    lastClicked: state.lastClicked,
    pick: (pokemon) => dispatch({ type: 'pick', pokemon }),
    restart: () => dispatch({ type: 'restart' }),
  }
}
