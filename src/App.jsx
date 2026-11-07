import { useState } from 'react'
import Card from './Card'
import Pokemons, { shufflePokemons } from './Pokemons'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  function handleClick(pokemon) {
    if (pokemon.isClicked) {
      reset()
    } else {
      pokemon.isClicked = true
      setScore((s) => s + 1)
      if (score + 1 > bestScore) {
        setBestScore((s) => s + 1)
      }
      checkWinner(score + 1)
    }
    shufflePokemons()
  }

  function reset() {
    setScore(0)
    Pokemons.forEach((pokemon) => (pokemon.isClicked = false))
  }

  function playAgain() {
    document.querySelector('#winner-modal').close()
    reset()
    setBestScore(0)
  }

  function checkWinner(nextScore) {
    if (nextScore === Pokemons.length) {
      const winnerModal = document.querySelector('#winner-modal')
      winnerModal.showModal()
    }
  }

  return (
    <>
      <header>
        <div id="top">
          <h1>Pokemon Memory Game</h1>

          <div id="scores">
            <p>
              Score: <span id="score">{score}</span>
            </p>
            <p>
              Best score: <span id="best-score">{bestScore}</span>
            </p>
          </div>
          <div id="bottom">
            <p>
              Get points by clicking on an image but don't click on any more
              than once
            </p>
          </div>
        </div>
      </header>
      <dialog id="winner-modal">
        <h2>Congratulations!</h2>
        <p>
          You have clicked all the Pokemons successfully without repitition...
        </p>
        <button onClick={playAgain}>Play Again</button>
      </dialog>
      <main>
        <div id="pokemon-grid">
          {Pokemons.map((Pokemon) => {
            return (
              <Card
                pokemon={Pokemon}
                key={Pokemon.name}
                handleClick={handleClick}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}

export default App
