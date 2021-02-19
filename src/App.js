import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
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
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <PokemonForm handleSubmit={handleSubmit} />
              {finalString !== '' && <Pokedex name={finalString} />}
            </VStack>
          </Grid>
        </Box>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
