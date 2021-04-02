import { useQuery } from 'react-query';
import React from 'react';
import { Divider } from '@chakra-ui/react';
import { getPokemon } from '../fetch';
import PokedexFrame from './PokedexFrame';
import PokedexScreen from './PokedexScreen';
import PokedexFrameLeft from './PokedexFrameLeft';
import PokedexFrameRight from './PokedexFrameRight';

export default function Pokedex(props) {
  const { isLoading, isError, data, error } = useQuery(
    ['pokemon', props.name],
    () => getPokemon(props)
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.messag}</p>;

  const { name, moves, sprites } = data.data;

  if (!data.data) {
    return <p>Search a valid pokemon name.</p>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <PokedexFrame toolbox={'hammer'}>
      <PokedexFrameLeft>
        <PokedexScreen src={sprites.other['official-artwork'].front_default} />
      </PokedexFrameLeft>
      <Divider orientation="vertical" />
      <PokedexFrameRight>
        <h1>{name ? name : 'No name'}</h1>
        <ul>
          {moves.map((move, i) => (
            <li key={`move-${i}`}>
              <a href={move.move.url}>{move.move.name}</a>
            </li>
          ))}
        </ul>
      </PokedexFrameRight>
    </PokedexFrame>
  );
}
