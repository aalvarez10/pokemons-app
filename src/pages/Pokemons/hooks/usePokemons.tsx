import { Pokemon } from '../../../interface/pokemons';
import { useState, useEffect, useCallback } from 'react';
import { del, get, post, put } from '../../../Services/service';

interface Toast {
    text:string;
    icon:string;
    color:string
}
export interface AdminPokemons{
    allPokemons : Pokemon[];
    allPokemonsClear : Pokemon[];
    isCardShow: boolean;
    selectedPokemon?:Pokemon;
    toastInfo: Toast
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
                        defense:0},
        toastInfo:{text:'',icon:'', color:''}
    })

    const { allPokemons,isCardShow,selectedPokemon, allPokemonsClear, toastInfo } = statePokemons;

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
            console.log(pokemon);
            if(pokemon.id){
            setStatePokemons(prev => ({
                ...prev,
                allPokemons: [...allPokemons,pokemon ],
                isCardShow:false,
                toastInfo:{text:'Guardado correctamente!',icon:'fa fa-check',color:'success'}
            }))
        }else{
            setStatePokemons(prev => ({
                ...prev,
                
                toastInfo:{text:'Error, complete los campos!',icon:'fa fa-close',color:'error'}
            }))
        }
        })
        .catch(err => console.log(err))
    }

    /*
    *Editar Pokemon
    **/
   const updatePokemon = (pokemon:Pokemon) => {
    const {id_author:idAuthor,...pokemonData} = pokemon
    put(`https://bp-pokemons.herokuapp.com/${pokemon.id}`,{idAuthor,...pokemonData})
    .then((pokemon:Pokemon) => {
        if(pokemon.id){
            let filterPokemons = allPokemons.filter(pk => {
                return pk.id !== pokemon.id;
              })
              setStatePokemons(prev => ({
                ...prev,
                allPokemons: [...filterPokemons,pokemon ],
                isCardShow:false,
                toastInfo:{text:'Actualizado correctamente!',icon:'fa fa-check',color:'success'}
            }))
        }else{
            setStatePokemons(prev => ({
                ...prev,
                
                toastInfo:{text:'Error, complete los campos!',icon:'fa fa-close',color:'error'}
            }))
        }
       
    })
    .catch(err => console.log(err)) 
   }

   /*
   *Eliminar ppokemon
   **/

   const deletePokemon = (id:number ) => {
    del(`https://bp-pokemons.herokuapp.com/${id}`)
    .then(() => {
        let filterPokemons = allPokemons.filter(pk => {
            return pk.id !== id;
          })
          setStatePokemons(prev => ({
            ...prev,
            allPokemons: filterPokemons,
            toastInfo:{text:'Eliminado correctamente!',icon:'fa fa-check',color:'success'}
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
        toastInfo,

        showCard,
        addPokemon,
        updatePokemon,
        deletePokemon,
        searchPokemon
    }
}
