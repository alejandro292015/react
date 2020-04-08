import React from 'react'
import Platos from './components/Platos';
import Ingredientes from './components/Ingredientes';
import Cabezera from './components/Cabezera';

 import './styles/app.css'
 import './styles/Platos.css'
function  App(){
  return(
    <div className="App">
    <Cabezera /> 
    <Platos /> 
    <Ingredientes /> 
    </div>
    )

   
  }

export default App