import { useContext } from 'react';

import Button from "../Button"
import Search from "../Search"

import "./TableHead.css"

import { PokemonsContext } from '../../pages/Pokemons/container/PokemonContainer';

const initialValues = {
  name:'',
  image:'',
  attack: 0,
  defense:0,
  hp: 100,
  type: "water",
  idAuthor: 1
}

const TableHead = () => {

    const {showCard,searchPokemon} = useContext(PokemonsContext)

    const onClick = () => {
        showCard(true,initialValues)
    }

    const filterPokemon = (name:string) => {
        searchPokemon(name)
    }


  return (
    <div className='containerHead'>
      <div className='search'>
        <Search handleChange={filterPokemon}/>
      </div>
      <div className='create'>
        <Button title='Nuevo' icon='fa fa-plus' handleClick={ onClick}/>
      </div>
    </div>
  )
}

export default TableHead