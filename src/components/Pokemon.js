import { useQuery, useQueryClient } from 'react-query';
import React from 'react';
import { getPokemonByName } from '../fetch';

export default function Pokemon(props) {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { data, status } = useQuery('pokemon', () => getPokemonByName(props));

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error :(</p>;

  const { name, moves } = data.data;
  // We can assume by this point that `isSuccess === true`
  return (
    <div>
      <h1>{name ? name : 'No name'}</h1>
      <ul>
        {moves.map((move, i) => (
          <li key={`move-${i}`}>
            <a href={move.move.url}>{move.move.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
