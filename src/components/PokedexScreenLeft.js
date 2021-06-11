import React from 'react';
import { GridItem, Image } from '@chakra-ui/react';

const PokedexScreenLeft = props => {
  const { src } = props;
  return (
    <GridItem
      colStart={2}
      colEnd={9}
      rowStart={1}
      rowEnd={4}
      className="flex-1 bg-white rounded-lg"
    >
      <Image
        src={src}
        alt="pokemon"
        className="h-full w-full"
        objectFit="contain"
      />
    </GridItem>
  );
};

export default PokedexScreenLeft;
