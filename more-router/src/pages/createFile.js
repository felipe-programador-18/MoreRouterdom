import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const InformaAbout = () => {
    const {id}= useParams()
    const url = "http://localhost:3000/products/" + id;
    const {data:product, loading, error} = useFetch(url)
    
    console.log('testing here', product)

    return (<>
      
      <h1>Testing about users parameters</h1>
       {product.name}

      <Link to={`/products/${product.id}/other`} >Go on another page</Link>

    </>)
} 

export default InformaAbout