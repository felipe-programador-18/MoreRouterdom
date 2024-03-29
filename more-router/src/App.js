
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Sobre from './pages/home';
import Nav from './Navbar/Nav'
import AnotherSobre from './pages/AnotherSobre';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import {SearchBar} from './Navbar/SearchBar';
import Search from './pages/Search';
import InformaAbout from './pages/createFile';


function App() {
   
return ( <div className='App' >
     <h1>React Router</h1>
     <Nav/>
     <SearchBar/>
    <Routes>
      <Route path='/' element={<Sobre/>} />
      <Route path='/sobre' element={<AnotherSobre/> } />
      <Route path='/products/:id' element={<Product/>}  />
      <Route path='/products/:id/other' element={<InformaAbout/>} /> 
      {/* nested router */}
      <Route path='/products/:id/info' element={ <Info/>}  />
      
      <Route path='/search' element={<Search/> }  />
      {/*last router created about 404*/}
      <Route path='*' element= {<NotFound/>}  />

      {/* redirect router!! */}
      <Route path='/company' element={<Navigate to='/sobre' /> } />
    </Routes>
    
  </div> );
}

export default App;
