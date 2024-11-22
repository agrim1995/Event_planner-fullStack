import Nav from './components/User/Nav';
import Home from './components/User/Home';
import About from './components/User/About';
import Gallery from './components/User/Gallery';
import Event from './components/User/Event';
import Contact from './components/User/Contact';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/User/Login';
import { Register } from './components/User/Register';


function App(props) {
  return (
    <>
    <Nav/> 
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/gallery' element={<Gallery/>}></Route>
    <Route path='/events' element={<Event/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>

    
    </Routes>
    {/* <Home /> */}
    {/* <About /> */}
    {/* <Gallery /> */}
    {/* <Event /> */}
    {/* <Contact /> */}
    
    {/* <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/#home' element={<Home/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Home' element={<Home/>}/>
     <Route path='/About' element={<About/>}/>

    </Routes>
 */}


    </>
  );
}

export default App;
