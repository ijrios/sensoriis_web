import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
import tw from "twin.macro";

const Title = tw.h1`
  text-4xl
  font-extrabold
  items-center
  justify-center
  
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <img src={require('../../images/api (1).png')} width={60} height={60} alt='logo' />
        <Title> </Title>
        </NavLink>
        <NavMenu>
        <Title>S E N S O R E S</Title>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
