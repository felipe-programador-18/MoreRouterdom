import React from 'react'
import { useFetch } from '../hooks/useFetch'
import './home.css' 
import { Link } from 'react-router-dom'



const Sobre = () => {
    const url = "http://localhost:3000/products"
    //get date about destructment assistment
    const {data:items,loading, error} = useFetch(url)

    return ( <div >
            <h1>Produtos</h1>

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