import axios from 'axios';

export async function getPokemon(query) {
  const { name, id } = query;
  const result = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${name ? name : id}`
  );

  return result;
}
