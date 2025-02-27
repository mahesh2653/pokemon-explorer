import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import Pokemon from "../../type/pokemon.type";

type Data = {
  data: Pokemon[];
};

const pokemonBaseUrl = 'https://pokeapi.co/api/v2/pokemon';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  const response = await axios.get(`${pokemonBaseUrl}?limit=50`);
  const initialPokemonList = response.data.results as Pokemon[];
  const data = initialPokemonList.map((pokemon) => { return { ...pokemon, id: pokemon.url.split('/').at(-2) } });
  res.status(200).json({ data });
}



