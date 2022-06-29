import React from 'react'
import { useFetch } from '../hooks/useFetch'
import '../App.css' 
const Sobre = () => {
    const url = "http://localhost:3000/products"
    //get date about destructment assistment
    const {data:items,loading, error} = useFetch(url)

    return ( <div className='App' >
            <h1>Produtos</h1>
            {error && <p>{error} </p>  }
        <ul>
            { items && items.map((item) => (<li key={item.id}>
                <h1> {item.name} </h1> 
                <p>  {item.price} </p>  
                </li>))}
        </ul>
    </div>)
}

export default Sobre