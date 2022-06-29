import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css' ;

const Nav = () => {
    
    return(
    <div className='App' >
     <nav>
        <Link to='/home' > Home </Link>
        <Link to='/' >Sobre</Link>
     </nav>
     </div>  )
}

export default Nav