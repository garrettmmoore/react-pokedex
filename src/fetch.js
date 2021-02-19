import axios from 'axios';

async function getPokemon(query) {
  const { name } = query;
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

async function postPokemon(query) {
  const { name, id } = query;
  const result = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${name ? name : id}`
  );

  return result;
}

// export default getPokemon;
export { getPokemon, postPokemon };
