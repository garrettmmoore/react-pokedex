import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { getPokemon } from './fetch';

// Create a client
const queryClient = new QueryClient();

function App() {
  const [pokemon, setPokemon] = React.useState();

  console.log('Get Pokemon Result: ', pokemon);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <Logo h="40vmin" pointerEvents="none" />
              <Text>
                Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
              </Text>
              <Link
                color="teal.500"
                href="https://chakra-ui.com"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Chakra
              </Link>
              <div>{pokemon && pokemon.name}</div>
              <MyButton setPokemon={setPokemon}>GET POKEMON</MyButton>
            </VStack>
          </Grid>
        </Box>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

function MyButton({ setPokemon, children }) {
  return (
    <button onClick={() => setPokemon(getPokemon({ name: 'pikachu' }))}>
      {children}
    </button>
  );
}

export default App;
