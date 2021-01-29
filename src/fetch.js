import axios from 'axios';

export async function getPokemonByName(props) {
  const result = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${props.name}`
  );

  return result;
}

export async function postPokemon(query) {
  const { name, id } = query;
  const result = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${name ? name : id}`
  );

  return result;
}
