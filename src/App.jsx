import Card from './Card'

function App() {
  return (
    <>
      <header>
        <div id="top">
          <h1>Pokemon Memory Game</h1>

          <div id="scores">
            <p>
              Score: <span id="score">0</span>
            </p>
            <p>
              Best score: <span id="best-score">0</span>
            </p>
          </div>
          <div id="bottom">
            <p>Get points by clicking on an image but don't click on any more than once</p>
          </div>
        </div>
      </header>
      <main>
        <Card />
      </main>
    </>
  )
}

export default App
