import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg';

import { Container, NavbarLinks, Menu, MenuContainer } from './styles';

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <Container>
      <NavbarLinks>
        <div className="logo">
          <a href="/"><img src={logo} /></a>
        </div>
        <div className="container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </NavbarLinks>
      <div className="sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <Menu>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <MenuContainer>
            <div>
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is GPT3?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="menu-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </MenuContainer>
        )}
      </Menu>
    </Container>
  );
}

export default Navbar;
