import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from 'wouter'
import logo from './components/juaneso.png';
import './App.css';
function App() {
  return (
    <div className="App">
      <section className="App-content">
        <img src={logo} className= 'logo'/>
        <div className='cajaText'>
          <div className='cajaContenedor'>            
            <h2 className='h2'>Los gifs mas buscados:</h2>
            <br></br>
            <Link to='/gif/papo'>Gifs de papo.</Link>
            <br></br>
            <Link to='/gif/lana r'>Gifs de porno.</Link>
            <br></br>
            <Link to='/gif/barranquilla'>Gifs de Jeisonbocapicha.</Link>
          </div>
        </div>
        <br></br>
        <Route 
        path="/gif/:keyword" 
        component={ListOfGifs}/>
      </section>
    </div>
  );
  }

export default App;
