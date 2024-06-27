// src/components/Header.tsx

import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000; 
  color: white;
  padding: 1em 0 3em 0;
  width: 100%; 
  position: absolute; 
  top: 0;
  left: 0;
  z-index: 1000;
  height: 40px; /* Altura fixa do header */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Industrial = styled.span`
  font-family: 'Syncopate', sans-serif;
  font-size: 1.5em;
  color: #ffffff; 
  margin-left: 1em; 
`;

const Ink = styled.span`
  font-family: 'Syncopate', sans-serif;
  font-size: 1.5em;
  color: #ffffff; 
`;

const MenuIcon = styled.img`
  height: 40px; 
  cursor: pointer;
  margin-right: 1em; 
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Industrial>INDUSTRIAL</Industrial>
        <Ink>INK</Ink>
      </LogoContainer>
      <MenuIcon src="/menu-hamburger.png" alt="Menu" />
    </HeaderContainer>
  );
};

export default Header;
