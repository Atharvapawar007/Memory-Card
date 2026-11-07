import { memo } from 'react'

function Card({ pokemon, onPick }) {
  return (
    <button type="button" className="card" onClick={() => onPick(pokemon)}>
      <span className="hero">
        <img
          src={pokemon.image}
          alt=""
          width="96"
          height="96"
          draggable="false"
        />
      </span>
      <span className="info">{pokemon.name}</span>
    </button>
  )
}

export default memo(Card)
