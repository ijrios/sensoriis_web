import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import tw from "twin.macro";
import { Sensores } from "./main";

const Contenedor = tw.div`
w-full
max-w-full
flex
flex-col
items-center
justify-center
pt-6
pb-10
pl-10
pr-10
`;

const P = tw.h1`
text-base
font-sans	
`;

function App() {
  return (
    <Router>
      <Navbar />
      <br/><br/>
      <Contenedor>
      <Sensores />
      <br/><br/>
      <P>Esta aplicación muestra el estado real de los sensores enviados como un archivo JSON desde Raspberry Pi con <b>Api rest</b></P>
      </Contenedor>
    </Router>
    
  );
}

export default App;
