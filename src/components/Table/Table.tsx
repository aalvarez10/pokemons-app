import { useContext, useState } from 'react';
import './Table.css'
import { PokemonsContext } from '../../pages/Pokemons/container/PokemonContainer';
import { Pokemon } from '../../interface/pokemons';
import Toast from '../Toast/Toast';



 const Table = () => {

    const {allPokemons, showCard, deletePokemon,toastInfo} = useContext(PokemonsContext)
    const headers = ['Nombre','Imagen','Ataque','Defensa','Acciones']

    const [ showToast, setShowToast ] = useState<boolean>(false)

    const handleShow = (pokemon:Pokemon) => {
      showCard(true,pokemon)
    }

    const handleDelete = (id:number) => {
      setShowToast(true)
      deletePokemon(id);
      setTimeout(() => {
      
        setShowToast(false)
      },5000)
    }

  return (
    <div className='containerTable'>

    <table>
       <thead>
            <tr>
                {
                    headers.map((item,index) => 
                        <th key={index}>{item}</th>
                    )
                }
            </tr>
       </thead>
      <tbody>
      {
             allPokemons.map((item, index) => {
                return(
                    <tr key={index}>
                        <td >{item.name}</td>
                        <td className='image'><img src={item.image} alt="" width="30" height="30" /></td>
                        <td >{item.attack}</td>
                        <td >{item.defense}</td>
                        <td className='image'>
                        <i className="fa fa-paint-brush icon-left" onClick={() => handleShow(item)}></i>
                        {/* @ts-ignore */}
                        <i className="fa fa-trash icon-right" onClick={() => handleDelete(item.id)}></i>
                        </td>
                    </tr>
                )
             }
           
             )
        }
      </tbody>
       
       
        
       
    </table>
    <Toast text={toastInfo.text} icon={toastInfo.icon} color = {toastInfo.color} show={showToast}/>
    </div>
  )
}


export default Table