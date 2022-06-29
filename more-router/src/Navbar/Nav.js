import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css' ;

const Nav = () => {
    
    return(
    <div className='App' >
     <nav>
        <Link to='/' > Home </Link>
        <Link to='/sobre' >Sobre</Link>
     </nav>
     </div>  )
}

export default Nav