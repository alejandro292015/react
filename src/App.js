import React from 'react'
import Ingredientes from './components/filtro';
import Cabezera from './components/Cabezera';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './styles/app.css'
 import './styles/filtro.css'
 import './styles/work.css'
import Work from './components/workout';
function  App(){
  return(
    <div className="App">
    <Cabezera /> 
    <Ingredientes /> 
    <Work /> 
    
  

    </div>
    )

   
  }

export default App