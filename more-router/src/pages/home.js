import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import './home.css' 
import { Link } from 'react-router-dom'
import { getApi } from '../Test.api/api'



const Sobre = () => {
    const url = "http://localhost:3000/products"
    //get date about destructment assistment
    // here i am caught about hoock personalities!!
    const {data:items,loading, error} = useFetch(url)

    
    const [dog, setDog] = useState([])
    console.log('dog',dog)
    const FecthingDate = async() => {

      const data = await getApi()
       setDog(data)
       console.log('what have here ?',data) 
    }
    
    
    
    //search dates testing
    useEffect(() => {
     FecthingDate()
    },[])
    
    
    return ( <div >
            <h1>Produtos</h1>
             
             
              
           { /* <img src={dog.message[2]} alt={dog.message} /> */}


            {loading && <p>loading ......</p>}
            {error && <p>{error} </p>  }
           <ul className='products'>
              { items && items.map((product) => (<li key={product.id}>
                <h1> {product.name} </h1> 
                <p> R$: {product.price} </p>  
                <Link to={`/products/${product.id}`} >Details!</Link>
                </li>))}
           </ul>
    </div>)
}

export default Sobre