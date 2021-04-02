import React from 'react';

const PokedexFrame = props => {
  const { children } = props;
  return <div className="pokedex-frame">{children}</div>;
};

export default PokedexFrame;
