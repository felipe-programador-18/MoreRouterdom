import React from 'react'
import { useParams ,Link } from 'react-router-dom'

//remerber i can get data of id together work with useParams/
const Info = () => {
 const {id} = useParams()
 //treat testing getting date about my hoock personalites
 
return ( <div> 

        <h1>More information about Products!! {id} </h1>
         <h2>This product is lot good, also have price much affordable for you acquiring!!</h2>
         <h3>This product is very interesting for you wanna traning or improve your health running!!</h3>
         {/* adding link to practice and create new idea for evolving how developer !!!  */}
         <Link to='/' > back home</Link>
    </div> )
}

export default Info