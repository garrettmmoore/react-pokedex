import { useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';

export default function Pokemon(props) {
  const { isLoading, isError, data, error } = useQuery('pokemon', () =>
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { name, moves } = data.data;

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
