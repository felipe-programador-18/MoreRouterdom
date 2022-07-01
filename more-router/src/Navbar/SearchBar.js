import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

export const SearchBar = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState()

  const handlSumit = (e) => {
    e.preventDefault();
    navigate("/search?q=" + query)

  }

   return(<>
         <form onSubmit={handlSumit} >
            <label>
              <input type='text' onClick={(e)=>  setQuery(e.target.value) }  />
            </label>
            <label>
                <input type='submit'  value='Buscar' />
            </label>

         </form>
   
   
   </>)
}

