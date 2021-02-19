import { useQuery } from 'react-query';
import React from 'react';
import { getPokemon } from '../fetch';

export default function Pokedex(props) {
  const { isLoading, isError, data, error } = useQuery('pokemon', () =>
    getPokemon(props)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { name, moves } = data.data;

  if (!data.data) {
    return <p>Search a valid pokemon name.</p>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <div>
      <h1>{name ? name : 'No name'}</h1>
      <ul>
        {console.log(data)}
        {moves.map((move, i) => (
          <li key={`move-${i}`}>
            <a href={move.move.url}>{move.move.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
