import React, {useState, useEffect } from "react";
import exerciseImg from './images/exercise.png'
import './styles/maincss.css'

const App = () => {
  
  const [dato, setDatos] = React.useState([])
 
  React.useEffect(() => {
    //console.log('useEffect')
    obtenerDatos()

  }, []) 

  const obtenerDatos =  async () =>{
    // Se cambia por la URL que llega de la nube
     const data = await fetch('https://my-json-server.typicode.com/ijrios/prueba/sensores')
     const datos = await data.json()
     console.log(datos)
     setDatos(datos)
  }
  render() {
  return(
<center>
<div>
      <h1> Estado de los sensores en tiempo real</h1>
       <ul>
         {
            dato.map(item => (
              <li key ="item.id">{item.title} - {item.value}</li>
            ))
         }
       </ul>
    </div>
    </center>
  )
 }
}

export default App;
