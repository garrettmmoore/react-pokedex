import React from 'react';
import { GridItem } from '@chakra-ui/react';

function PokedexScreenRight(props) {
  const { children } = props;
  return (
    <GridItem
      colStart={2}
      colEnd={11}
      rowStart={1}
      rowEnd={4}
      className="flex-1 overflow-y-scroll bg-green-400 rounded-lg text-sm"
    >
      {children}
    </GridItem>
  );
}

export default PokedexScreenRight;
