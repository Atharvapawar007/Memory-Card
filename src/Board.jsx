import { useEffect, useRef } from 'react'
import Card from './Card'
import { useGame } from './hooks/useGame'

function statusMessage(status, lastClicked) {
  if (status === 'lost')
    return `You already picked ${lastClicked.name}. Score reset, try again!`
  if (status === 'won') return 'You picked every Pokémon!'
  return "Click a Pokémon you haven't picked yet."
}

export default function Board({ pokemons }) {
  const { cards, score, bestScore, status, lastClicked, pick, restart } =
    useGame(pokemons)
  const modalRef = useRef(null)

  useEffect(() => {
    const modal = modalRef.current
    if (status === 'won' && !modal.open) modal.showModal()
  }, [status])

  return (
    <>
      <header>
        <div id="top">
          <h1>Pokémon Memory Game</h1>
          <div id="scores" aria-live="polite">
            <p>
              Score <span id="score">{score}</span>
            </p>
            <p>
              Best score <span id="best-score">{bestScore}</span>
            </p>
          </div>
          <div id="bottom">
            <p>
              Get points by clicking each Pokémon, but never the same one twice.
            </p>
            <p id="status" role="status" data-status={status}>
              {statusMessage(status, lastClicked)}
            </p>
          </div>
        </div>
      </header>

      <main>
        <div id="pokemon-grid">
          {cards.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} onPick={pick} />
          ))}
        </div>
      </main>

      <dialog id="winner-modal" ref={modalRef} onClose={restart}>
        <h2>Congratulations!</h2>
        <p>You clicked all {cards.length} Pokémon without a single repeat.</p>
        <form method="dialog">
          <button autoFocus>Play again</button>
        </form>
      </dialog>
    </>
  )
}
