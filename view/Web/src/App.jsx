import './App.css';

import tw from "twin.macro";
import { Sensores } from "./main";

const AppContainer = tw.div`
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

const Title = tw.h1`
  text-4xl
  font-extrabold
`;

function App() {
  return (
    <AppContainer>
      <br/><br/><br/><br/><br/><br/>
      <Title>S E N S O R E S</Title>
      <Sensores />
    </AppContainer>
  );
}

export default App;