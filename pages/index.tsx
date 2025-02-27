import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Box, Input, Heading, SimpleGrid, Container } from '@chakra-ui/react';
import PokemonCard from './components/PokemonCard';
import { useState, useEffect } from 'react';
import Pokemon, { HomeProps } from '../type/pokemon.type';

export default function Home({ initialPokemonList }: HomeProps) {
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>(initialPokemonList);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredPokemon(initialPokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [searchTerm, initialPokemonList]);

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8} color={'green.500'}>
        Pokemon Explorer
      </Heading>

      <Box maxW="md" mx="auto" mb={8}>
        <Input
          placeholder="Search Pokemon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="lg"
          bg="white"
          borderRadius="md"
          focusBorderColor="blue.500"
        />
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </SimpleGrid>

    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
    const initialPokemonList = response.data.results as Pokemon[];

    return {
      props: {
        initialPokemonList: initialPokemonList.map((pokemon) => { return { ...pokemon, id: pokemon.url.split('/').at(-2) } }),
      },
    };
  } catch (error) {
    console.error('Error fetching Pokemon on server:', error);
    return {
      props: {
        initialPokemonList: [],
      },
    };
  }
};