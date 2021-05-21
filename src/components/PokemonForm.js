import React, { useState } from 'react';
import { Button, TextField } from 'tackle-react';

const PokemonForm = ({ handleSubmit }) => {
  const [searchString, setSearchString] = useState('');
  const handleOnChange = event => {
    const { value } = event.target;
    setSearchString(value);
  };
  return (
    <form
      onSubmit={event => handleSubmit(event, searchString)}
      className="flex"
    >
      <TextField
        value={searchString}
        onChange={handleOnChange}
        className="mr-2"
      />
      <Button color="blue" type="submit" label="Submit" />
    </form>
  );
};

export default PokemonForm;
