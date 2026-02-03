function Pokemon({ pokemon }) {
  return (
    <div>
      <h2>Pokemon #{pokemon.id}</h2>
      <h3>{pokemon.name}</h3>
      <h3>{pokemon.type}</h3>
    </div>
  );
}
export default Pokemon;
