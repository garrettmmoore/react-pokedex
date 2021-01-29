import axios from 'axios';
import { useQuery } from 'react-query';

const URL = 'https://pokeapi.co/api/v2/pokemon';

export const useFetchPokemonByName = name => axios.get(`${URL}/${name}`);
