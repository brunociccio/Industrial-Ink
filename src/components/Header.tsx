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
  padding: 0.8em;
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
  padding: 1em 0 0 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Industrial = styled.span`
  font-family: 'Syncopate', sans-serif;
  font-size: 1.7em;
  color: #ffffff; 
  margin-left: 0.7em;
`;

const Ink = styled.span`
  font-family: 'Syncopate', sans-serif;
  font-size: 1.7em;
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
  color: #FFEA70; 
  text-shadow: 0 0 5px #FFEA70, 0 0 10px #FFEA70, 0 0 20px #FFEA70, 0 0 40px #FFEA70, 0 0 80px #FFEA70, 0 0 90px #FFEA70, 0 0 100px #FFEA70, 0 0 150px #FFEA70;
  text-decoration: none;
  padding: 0.5em 1em;
  cursor: pointer;
  animation: ${fadeInOut} 4s infinite;
`;

const DropdownNavLink = styled.a`
  font-family: 'Syncopate', sans-serif;
  color: #ffffff; /* Cor branca para o texto */
  text-decoration: none;
  padding: 0.5em 1em;
  cursor: pointer;
  background-color: #000; /* Fundo preto */

  &:hover {
    color: #DAA520;
  }
`;

const DropdownMenu = styled.div<{ open: boolean }>`
  position: absolute;
  top: 65px;
  right: 0.8em;
  left: 0.8em;
  background-color: #000;
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
          <DropdownNavLink href="/portfolios">PORTFÓLIOS</DropdownNavLink>
          <DropdownNavLink href="/orcamentos">ORÇAMENTOS</DropdownNavLink>
          <DropdownNavLink href="/outros">OUTROS</DropdownNavLink>
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







