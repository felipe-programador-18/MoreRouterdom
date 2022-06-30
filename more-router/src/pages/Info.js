import React from 'react'
import { useParams } from 'react-router-dom'

//remerber i can get data of id together work with useParams/
const Info = () => {
 const {id} = useParams()
 //treat testing getting date about my hoock personalites
 
return ( <div> 

        <h1>More information about Products!! {id} </h1>
         <h2>This product is lot good, also have price much affordable for you acquiring!!</h2>
    </div> )
}

export default Info