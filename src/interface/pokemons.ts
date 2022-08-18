import { AdminPokemons } from "../pages/Pokemons/hooks/usePokemons";


export interface Pokemon {
    id?:        number;
    name:      string;
    image:     string;
    attack:    number;
    defense:   number;
    hp?:        number;
    type?:      string;
    id_author?: number;
}


export interface PokemonsActions extends AdminPokemons{
    showCard:(show:boolean,pokemon?:Pokemon) => void;
    addPokemon:(pokemon:Pokemon) => void;
    updatePokemon:(pokemon:Pokemon) => void;
    deletePokemon:(id:number) => void;
    searchPokemon:(name:string) => void
}