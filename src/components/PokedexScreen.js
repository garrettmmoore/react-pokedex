import React from 'react';
import { GridItem, Image } from '@chakra-ui/react';

const PokedexScreen = props => {
  const { src } = props;
  return (
    <GridItem
      colStart={2}
      colEnd={9}
      rowStart={1}
      rowEnd={4}
      class="flex-1"
      className="pokedex-screen"
    >
      <Image src={src} alt="" className="h-80 w-80" />
    </GridItem>
  );
};

export default PokedexScreen;
