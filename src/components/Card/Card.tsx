import './card.css'

import Button from '../Button'
import { useContext, useState, useEffect } from 'react';
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
const Card = () => {

  const {isCardShow, showCard, addPokemon, selectedPokemon,updatePokemon} = useContext(PokemonsContext);
  

  const [formState, setFormState] = useState<any>(initialValues)

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

  useEffect(()=> {
  if(selectedPokemon?.id){
    setFormState(selectedPokemon)
    setButtonDisabled(false)
  }
  else{
    setFormState(initialValues)
    setButtonDisabled(true)
  }
  
  },[selectedPokemon])

  const onClick = () => {
    showCard(false)
    setFormState(initialValues)
  }

  const handleChange = (e: { target: { name: string; value: string | number; }; }) => {
    if(e.target.name === 'name' && e.target.value !== ''){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
    setFormState((prev:any )=> ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSave = () => {
   
    formState.id ? updatePokemon(formState) : addPokemon(formState)
    showCard(false)
    setFormState(initialValues)
  }

  return (
    isCardShow ? (
      <div className="card">
        <h1 className='title'>{formState.id ? 'Editar' :'Nuevo'} Pokemon</h1>
        <div className="grid-container">
          <div>Nombre:</div>
          <div>
            <input type="text"  placeholder="Nombre" name='name' value={formState.name} onChange={handleChange}/>
          </div>
          <div>Ataque:</div>  
          <div>
            0
            <input 
              type="range" 
              placeholder="Ataque" 
              min="0" 
              max="100" 
              id="atack" 
              name="attack"
              value={formState.attack}
              onChange={handleChange}/>
            100
          </div>
          <div>Imagen:</div>
          <div>
            <input type="text"  placeholder="Url" name='image' value={formState.image} onChange={handleChange}/>
          </div>
          <div>Defensa:</div>
          <div>
            0
            <input 
              type="range"  
              placeholder="Defensa" 
              min="0" 
              max="100" 
              id="defense" 
              name="defense"
              value={formState.defense}
              onChange={handleChange}/>
            100
          </div>
        </div>
        <div className='buttons'>
        <Button title="Guardar" icon='fa fa-hdd-o' handleClick={handleSave} disable={buttonDisabled}/>
        <Button title="Cancelar" icon='fa fa-remove' handleClick={onClick}/>
        </div>
        
      </div>
      ): <div/>
  )
}


export default Card