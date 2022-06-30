import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search  = () => {
 const [searchParams] = useSearchParams() 
 // this case the url is where api 3000!!
 const url ="http://localhost:3000/products?" + searchParams

 const {data:items, loading, error} = useFetch(url)
    
    return (<>
    <div> 
    <h1>Search new survey</h1>
           <ul className='products'>
              { items && items.map((item) => (<li key={item.id}>
                <h1> {item.name} </h1> 
                <p>  {item.price} </p>  
                <Link to={`/products/${item.id}`} >Details!</Link>
                </li>))}
           </ul>
    </div>
    </>)
}

export default Search