import React, { useEffect, useState } from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Sobre from './pages/home';
import Nav from './Navbar/Nav'

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
      <Route path='/' element={''} />
      <Route path='/home' element ={ <Sobre/> } />   
    </Routes>
    
  </div> );
}

export default App;
