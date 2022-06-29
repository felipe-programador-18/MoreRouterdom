import React, { useEffect, useState } from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Sobre from './pages/home';
import Nav from './Navbar/Nav'
import AnotherSobre from './pages/AnotherSobre';
import Product from './pages/Product';


//const url = "http://localhost:3000/products"
function App() {
 // const [products, setProduct] = useState([])

  //useEffect(() => {
    //const Fetching = async () => {
    //  const res = await fetch(url)
      //const data = await res.json()
      // setProduct(data)
    //}
 
    //Fetching()
  
  //},[])

  
return ( <div className='App' >
     <h1>React Router</h1>
     <Nav/>
    <Routes>
      <Route path='/' element={<Sobre/>} />
      <Route path='/sobre' element={<AnotherSobre/> } />
      <Route path='/products/:id' element={<Product/>}  />   
    </Routes>
    
  </div> );
}

export default App;
