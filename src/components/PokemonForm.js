import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';

const PokemonForm = ({ handleSubmit }) => {
  const [searchString, setSearchString] = useState('');
  const handleOnChange = event => {
    const { value } = event.target;
    setSearchString(value);
  };
  return (
    <form onSubmit={event => handleSubmit(event, searchString)}>
      <Input value={searchString} onChange={handleOnChange} />
      <input type="submit" />
    </form>
  );
};

export default PokemonForm;
