import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { PokemonCardProps } from '../../type/pokemon.type';

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${pokemon?.id}`}>
      <Box
        bg="white"
        borderRadius="lg"
        shadow="md"
        p={4}
        _hover={{ shadow: 'lg', transform: 'scale(1.02)' }}
        transition="all 0.2s"
        cursor="pointer"
        w="full"
      >
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`}
          alt={pokemon?.name}
          mx="auto"
          boxSize={{ base: '120px', md: '150px' }}
        />
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="semibold"
          textAlign="center"
          textTransform="capitalize"
          mt={2}
        >
          {pokemon?.name}
        </Text>
      </Box>
    </Link>
  );
}