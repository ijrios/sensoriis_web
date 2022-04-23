import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #ccc;
  display: flex;
  margin-left: -70px;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ccc;
  }
`;

export const NavMenu = styled.div`
color: #ccc;
display: flex;
margin-right: 350px;
align-items: center;
padding: 0 2rem;
height: 100%;
`;


;
