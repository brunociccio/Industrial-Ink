"use client";
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0%, 20%, 80%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000; 
  color: white;
  padding: 0.7em;
  width: 100%; 
  position: absolute; 
  top: 0;
  left: 0;
  z-index: 1000;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0.5em 0 0 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Industrial = styled.span`
  font-family: 'Syncopate', sans-serif;
  font-size: 1.8em;
  color: #ffffff;
  margin-left: 0.7em;
`;

const Ink = styled.span`
  font-family: 'Syncopate', sans-serif;
  font-size: 1.8em;
  color: #ffffff;
`;

const MenuIcon = styled.img`
  height: 40px; 
  cursor: pointer;
  margin-right: 1em;
`;

const LinkRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 1em;
  position: relative;
`;

const NavLink = styled.a`
  font-family: 'Neon', sans-serif;
  font-size: 20px;
  color: #FFD700; 
  text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 40px #FFD700, 0 0 80px #FFD700, 0 0 90px #FFD700, 0 0 100px #FFD700, 0 0 150px #FFD700;
  text-decoration: none;
  padding: 0.3em 0.5em;
  cursor: pointer;
`;

const DropdownNavLink = styled.a`
  font-family: 'Syncopate', sans-serif;
  color: #ffffff; 
  text-decoration: none;
  padding:1em;
  cursor: pointer;
  background-color: #333333; 
  font-weight: 500;
  width: 85%; 

  &:hover {
    background: linear-gradient(to right, #FFEA70, #FFEA70 60%, transparent);
    color: #000;
    font-weight: bold;
  }
`;

const DropdownMenu = styled.div<{ open: boolean }>`
  position: absolute;
  top: 4em;
  right: 0;
  left: 8.5em;
  background-color: #333333; 
  border: 1.5px solid #FFEA70;
  padding: 1em;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  z-index: 1001; 
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <TopRow>
        <LogoContainer>
          <Industrial>INDUSTRIAL</Industrial>
          <Ink>INK</Ink>
        </LogoContainer>
        <MenuIcon src="/menu-hamburger.png" alt="Menu" onClick={toggleMenu} />
        <DropdownMenu open={menuOpen}>
          <DropdownNavLink href="/">HOME</DropdownNavLink>
          <DropdownNavLink href="/sobre-nos">SOBRE NÓS</DropdownNavLink>
          <DropdownNavLink href="/portfolios">PORTFÓLIOS</DropdownNavLink>
          <DropdownNavLink href="/contato">CONTATO</DropdownNavLink>
          <DropdownNavLink href="/orcamentos">ORÇAMENTOS</DropdownNavLink>
        </DropdownMenu>
      </TopRow>
      <LinkRow>
        <NavLink href="#tattoo">TATTOO</NavLink>
        <NavLink href="#piercing">PIERCING</NavLink>
        <NavLink href="#remocao">REMOÇÃO</NavLink>
      </LinkRow>
    </HeaderContainer>
  );
};

export default Header;





