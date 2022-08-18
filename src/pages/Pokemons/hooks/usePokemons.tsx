import { Pokemon } from '../../../interface/pokemons';
import { useState, useEffect, useCallback } from 'react';
import { del, get, post, put } from '../../../Services/service';

export interface AdminPokemons{
    allPokemons : Pokemon[];
    allPokemonsClear : Pokemon[];
    isCardShow: boolean;
    selectedPokemon?:Pokemon
}

export const usePokemons = () => {
  
    const [statePokemons, setStatePokemons] = useState<AdminPokemons>({
        allPokemons: [],
        allPokemonsClear:[],
        isCardShow:false,
        selectedPokemon:{
                        name:'asdfsa',
                        image:'',
                        attack: 0,
                        defense:0}
    })

    const { allPokemons,isCardShow,selectedPokemon, allPokemonsClear } = statePokemons;

    /*
    *Cargar todos los pokemons
    **/
    const getPokemons = useCallback(
        async () => {
            try {
                const pokemons = await get('/?idAuthor=1')
                setStatePokemons(prev => ({
                    ...prev,
                    allPokemons: pokemons,
                    allPokemonsClear:pokemons
                }))
            } catch (error) {
                
            }
        },
        [],
    )

    useEffect(() => {
        getPokemons()
    },[getPokemons])

    /*
    *Ocultar Card de editar o agregar pokemon
    **/
    const showCard = (show: boolean, pokemon ?: Pokemon) => {
        setStatePokemons(prev => ({
            ...prev,
            isCardShow:show,
            selectedPokemon: pokemon
        }))
    }

    /*
    *Agregar Pokemon
    **/
    const addPokemon = (pokemon: Pokemon) => {
        post('/?idAuthor=1',pokemon)
        .then((pokemon:Pokemon) => {
            setStatePokemons(prev => ({
                ...prev,
                allPokemons: [...allPokemons,pokemon ]
            }))
        })
        .catch(err => console.log(err))
    }

    /*
    *update Pokemon
    **/
   const updatePokemon = (pokemon:Pokemon) => {
    const {id_author:idAuthor,...pokemonData} = pokemon
    put(`https://bp-pokemons.herokuapp.com/${pokemon.id}`,{idAuthor,...pokemonData})
    .then((pokemon:Pokemon) => {
        let filterPokemons = allPokemons.filter(pk => {
            return pk.id !== pokemon.id;
          })
          setStatePokemons(prev => ({
            ...prev,
            allPokemons: [...filterPokemons,pokemon ]
        }))
    })
    .catch(err => console.log(err)) 
   }


   const deletePokemon = (id:number ) => {
    del(`https://bp-pokemons.herokuapp.com/${id}`)
    .then(() => {
        let filterPokemons = allPokemons.filter(pk => {
            return pk.id !== id;
          })
          setStatePokemons(prev => ({
            ...prev,
            allPokemons: filterPokemons
        }))
    })
    .catch(err => console.log(err)) 
   }

   const searchPokemon = (name:string) => {
    let filter = allPokemonsClear.filter(pk => {
        return pk.name.toLowerCase().includes(name.toLowerCase());
      })
      setStatePokemons(prev => ({
        ...prev,
        allPokemons: name === '' ? allPokemonsClear :filter
    }))
   }


    return {
        allPokemons,
        isCardShow,
        selectedPokemon,
        allPokemonsClear,

        showCard,
        addPokemon,
        updatePokemon,
        deletePokemon,
        searchPokemon
    }
}
