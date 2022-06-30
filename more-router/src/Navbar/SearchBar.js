import { useNavigate } from 'react-router-dom'
import React,{useState} from 'react'

const SearchBar = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState()

  const handlSumit = (e) => {
    e.preventDefault()
    navigate('/search?q'+ query)

  }

   return(<>
         <form onSubmit={handlSumit} >
            <label>
              <input type='text' name='search' onClick={(e)=>  setQuery(e.target.value) }  />
            </label>
            <label>
                <input type='submit'  value='search' />
            </label>

         </form>
   
   
   </>)
}

export default SearchBar