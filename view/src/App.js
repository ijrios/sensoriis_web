import React, {useState, useEffect } from "react";
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
  
  return(
<center>
<br />
<div className="title">
<h1> Estado de los sensores en tiempo real</h1>   
</div>

<div className="app mx-auto App-container">
<div className="app-body">
    <div className="row center">
        <div className="col-6 App-Info">
        <ul>
         {
            dato.map(item => (
              <p key ="item.id">{item.title} - {item.value}</p>
            ))
         }
       </ul>
     </div>
    </div>
</div>
</div>
</center>
  )
}

export default App;
