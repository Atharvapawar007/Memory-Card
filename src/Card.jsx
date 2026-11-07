function Card({ pokemon, handleClick }) {
  return (
    <>
      <div className="card" onClick={() => handleClick(pokemon)}>
        <div className="hero">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="info">
          <h3>{pokemon.name}</h3>
        </div>
      </div>
    </>
  )
}

export default Card
