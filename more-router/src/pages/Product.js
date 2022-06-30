import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Product = () => {
   //how useparams i gotten all object inside api!!
   // router dynamic!! 
   const { id } = useParams();
   // here i get all parameter that aplication that putting  id!!


   //5 loaded date individuals!!
   //theoritical i create url to get url of door 3000
   const url = "http://localhost:3000/products/" + id;
   const {data:product, loading, error} = useFetch(url)
   
   console.log('teste', product)
   return(<>
    <h1> Id of  products {id} </h1>
    {error && <p>ERROR HERE!!!</p> }
    {loading && <p>Carregando ....</p>}
    
    {product && (<div>
         <h1>{product.name}</h1>
         <p className='gave' >R$:{product.price}</p>
    </div>)}
      
    </>)
}

export default Product