import { createContext, ReactElement } from "react"
import { PokemonsActions} from "../../../interface/pokemons";
import { usePokemons } from '../hooks/usePokemons';

export const PokemonsContext = createContext({} as PokemonsActions);
const { Provider } = PokemonsContext;

interface Props {
    children ?: ReactElement | ReactElement[];
}

export const PokemonsContainer = ({children} :Props) => {

    const { allPokemons, isCardShow, showCard, addPokemon, selectedPokemon, updatePokemon, 
            deletePokemon, searchPokemon, allPokemonsClear, toastInfo 
        } = usePokemons();

    return(
        <Provider value={{
            allPokemons,isCardShow, showCard, addPokemon, selectedPokemon,updatePokemon, 
            deletePokemon, searchPokemon,allPokemonsClear,toastInfo }}>
            {children}
        </Provider>
    )
}