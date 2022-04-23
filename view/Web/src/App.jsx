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
shadow-lg
`;

function App() {
  return (
    <Router>
      <Navbar />
      <Contenedor>
      <Sensores />
      <br/><br/>
      <p>Esta aplicación muestra el estado real de los sensores enviados desde Raspberry Pi</p>
      </Contenedor>
    </Router>
    
  );
}

export default App;
