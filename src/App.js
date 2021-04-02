import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import { ChakraProvider, Box, Grid, GridItem, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Pokedex from './components/Pokedex';
import PokemonForm from './components/PokemonForm';

// Create a client
const queryClient = new QueryClient();

function App() {
  // searchString state
  const [finalString, setFinalString] = useState('');

  const handleSubmit = (event, searchString) => {
    event.preventDefault();
    setFinalString(searchString);
  };

  return (
    //hi
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box textAlign="center" fontSize="xl">
          <Grid
            h="100vh"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
          >
            <GridItem colStart={2} colEnd={10} rowStart={2} rowEnd={2}>
              <PokemonForm handleSubmit={handleSubmit} />
            </GridItem>
            <GridItem colStart={2} colEnd={10} rowStart={3} rowEnd={10}>
              {finalString !== '' && <Pokedex name={finalString} />}
            </GridItem>
          </Grid>
        </Box>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
