import React from 'react';
import { GridItem, Image, Box } from '@chakra-ui/react';

const PokedexScreenLeft = props => {
  const { src } = props;
  return (
    <Box>
      <GridItem
        colStart={2}
        colEnd={9}
        rowStart={1}
        rowEnd={4}
        className="flex-1 pokedex-screen w-full h-full"
      >
        <Image src={src} alt="" className="h-80 w-80" />
      </GridItem>
    </Box>
  );
};

export default PokedexScreenLeft;
