"use client"
import { useRouter } from 'next/navigation';
import { Center, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

interface PokemonDetails {
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  moves: { move: { name: string } }[];
}

function PokemonDetail({ pokemon }: { pokemon: PokemonDetails | null }) {
  const router = useRouter();

  if (!pokemon) return <Box textAlign="center" py={8}>
    <Center h="full">
      <Spinner color="teal.500" />
    </Center>
  </Box>;

  return (
    <Container maxW="container.lg" py={8}>
      <Button
        onClick={() => router.back()}
        mb={4}
        colorScheme="blue"
        size="md"
      >
        Back to Home
      </Button>

      <Box bg="white" borderRadius="lg" shadow="md" p={6}>
        <VStack>
          <Heading as="h1" size="xl" textTransform="capitalize" textAlign="center">
            {pokemon.name}
          </Heading>

          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            boxSize={{ base: '150px', md: '200px' }}
            mx="auto"
          />

          <SimpleGrid columns={{ base: 1, md: 2 }} w="full">
            <VStack align="start">
              <Box>
                <Text fontSize="lg" fontWeight="semibold" mb={2}>Types</Text>
                <HStack>
                  {pokemon.types.map((type) => (
                    <Badge
                      key={type.type.name}
                      colorScheme="blue"
                      textTransform="capitalize"
                      px={2}
                      py={1}
                    >
                      {type.type.name}
                    </Badge>
                  ))}
                </HStack>
              </Box>

              <Box>
                <Text fontSize="lg" fontWeight="semibold" mb={2}>Abilities</Text>
                <VStack align="start">
                  {pokemon.abilities.map((ability) => (
                    <Text key={ability.ability.name} textTransform="capitalize">
                      {ability.ability.name}
                    </Text>
                  ))}
                </VStack>
              </Box>
            </VStack>

            <Box>
              <Text fontSize="lg" fontWeight="semibold" mb={2}>Stats</Text>
              <VStack align="start">
                {pokemon.stats.map((stat) => (
                  <Box key={stat.stat.name}>
                    <Text textTransform="capitalize" fontWeight="medium">
                      {stat.stat.name}: {stat.base_stat}
                    </Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          </SimpleGrid>

          <Box w="full">
            <Text fontSize="lg" fontWeight="semibold" mb={2}>Moves</Text>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }}>
              {pokemon.moves.slice(0, 12).map((move) => (
                <Badge
                  key={move.move.name}
                  colorScheme="gray"
                  textTransform="capitalize"
                  p={2}
                  textAlign="center"
                >
                  {move.move.name}
                </Badge>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
}

export default PokemonDetail

export const getServerSideProps: GetServerSideProps<any> = async ({ params }) => {
  try {
    const id = params?.id;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = response.data
    return {
      props: {
        pokemon,
      },
    };
  } catch (error) {
    console.error('Error fetching Pokemon on server:', error);
    return {
      props: {
        pokemon: null,
      },
    };
  }
}