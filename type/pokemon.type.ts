export default interface Pokemon {
    name: string;
    url: string;
    id?: string
}

export interface HomeProps {
    initialPokemonList: Pokemon[];
}

export interface PokemonCardProps {
    pokemon: Pokemon;
}