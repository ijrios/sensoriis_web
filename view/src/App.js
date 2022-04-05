import React, {useState, useEffect } from "react";

const Nosotros = () => {
  
  const [dato, setDatos] = React.useState([])
 
  React.useEffect(() => {
    //console.log('useEffect')
    obtenerDatos()

  }, []) 

  const obtenerDatos =  async () =>{
     const data = await fetch('https://my-json-server.typicode.com/ijrios/prueba/sensores')
     const datos = await data.json()
     console.log(datos)
     setDatos(datos)
  }

  return(
    <div>
      <h1> Nosotros</h1>
       <ul>
         {
            dato.map(item => (
              <li key ="item.id">{item.title} - {item.value}</li>

            ))
         }
       
       </ul>
         
    </div>

  )
}

export default Nosotros;
