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
    <br />
    <br />
    <br />
    <div className="title">
    <h1> Estado de los sensores</h1>   
    </div>
    <div className="App">
      <table>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Fecha</th>
        </tr>
        {dato.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.title}</td>
              <td>{val.value}</td>
              <td>{val.fecha}</td>
            </tr>
          )
        })}
      </table>
    </div>
  </center>
  )
  }

export default App;
