import Pokemon from "../pokemon";

function PokemonList({ pokemonData }) {
  console.log(pokemonData);

  return (
    <h1>
      {pokemonData.map((pokemon) => {
        return <Pokemon pokemon={pokemon} />;
      })}
    </h1>
  );
}

export default PokemonList;
