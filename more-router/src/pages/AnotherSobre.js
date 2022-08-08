import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useSearchParams, useParams } from 'react-router-dom'

const AnotherSobre = () => {
  const{id}= useParams()
  
  console.log("test my id", id)
  
  const[search]  = useSearchParams()
  const [query, setQuery ]= useState('')
  const navigate = useNavigate()
  

  // practice little bit about react
  const ulr = "http://localhost:3000/products?" + search
  const {data:items, loading, error} = useFetch(ulr)
  console.log('have somethings here', items)


  const HandSumit = (event) => {
    event.preventDefault()
    setQuery(" ")
    
    navigate('/search?q=' +query)
  }



    return(<div>
        <h1>About my products</h1>
        <form onSubmit={HandSumit}>
            <label>
                search products
                <input  type='text' name='search' value={query} onChange={(event) => setQuery(event.target.value)}  />
                
                <input type='submit' value='send dates' />
            </label>
           
           {!items && (<p> nothing this survey here</p>) }

        </form>
        
        {items && items.map((item) => (<div key={item.id} >
          <h1>{item.name}</h1> 
          <Link to={`/products/${item.id}`} >details about product!</Link>
        </div>))}
         

    </div>)
}

export default AnotherSobre