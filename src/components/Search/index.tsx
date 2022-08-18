
import './Search.css'

type Props = {
    value?:string;
    handleChange: (e:string)=> void
}

const Search = ({value, handleChange}:Props) => (
    
    <input type="search" placeholder="Busca" id="Buscador" value={value} onChange={(e) => handleChange(e.target.value)}/>
   
)




export default Search;