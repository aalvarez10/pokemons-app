import Table from "../../components/Table/Table"
import TableHead from "../../components/TableHead/TableHead"
import Title from "../../components/Title"
import Card from "../../components/Card/Card"

import "./Pokemons.css"

import { PokemonsContainer } from './container/PokemonContainer';

export const Pokemons = () => {
  return (
    <PokemonsContainer>
      <Title title='Listado de Pokemon'/>
      <TableHead/>
      <Table/>
      <Card />
    </PokemonsContainer>
  )
}
