import Button from './components/Button'
import Search from './components/Search';
import Table from './components/Table/Table'
import Title from './components/Title'
import './App.css';
import { Pokemons } from './pages/Pokemons/Pokemons';


function App() {
  return (
    <div className="App">
      <Pokemons/>
     {/*  <Title title='Listado de Pokemon'/>
      <div >
        <div className='search'>
          <Search />
        </div>
        <div className='create'>
          <Button title='Nuevo' icon='+'/>
        </div>
      </div>
      <Table/> */}
    </div>
  );
}

export default App;
