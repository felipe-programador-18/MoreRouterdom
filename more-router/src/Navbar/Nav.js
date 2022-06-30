import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css' ;

const Nav = () => {
    
    return(
    <div className='App' >
     <nav>
        {/*<Link to='/' > Home </Link>
        <Link to='/sobre' >Sobre</Link>*/}
       
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/sobre' >Sobre</NavLink>
     </nav>
     </div>  )
}

export default Nav