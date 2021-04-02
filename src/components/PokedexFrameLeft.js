import React from 'react';
import { Grid } from '@chakra-ui/react';

const PokedexFrameLeft = props => {
  const { children } = props;
  return (
    <Grid
      className="flex-1"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(10, 1fr)"
    >
      {children}
    </Grid>
  );
};

export default PokedexFrameLeft;
