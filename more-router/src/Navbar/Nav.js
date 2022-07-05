import React from 'react'
import {  NavLink } from 'react-router-dom'
import '../App.css' ;

const Nav = () => {
    
    return(
    <div className='App' >
     <nav>
    
       
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/sobre' >Sobre</NavLink>
     </nav>
     </div>  )
}

export default Nav