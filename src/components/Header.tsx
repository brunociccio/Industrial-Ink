// src/components/Header.tsx

import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #000; 
  color: white;
  width: 100%; 
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 1000;
`;

const MenuIcon = styled.img`
  height: 40px; 
  cursor: pointer;
  margin-right: 1em; /* Espaçamento entre o menu e o logo */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;
`;

const Industrial = styled.span`
  font-family: 'Syncopate', sans-serif;
  font-size: 1.5em;
  color: #CD7F32; /* Bronze escuro */
`;

const Ink = styled.span`
  font-family: 'Syncopate', sans-serif;
  font-size: 1.5em;
  color: #DAA520; /* Bronze claro */
`;

const LoginContainer = styled.div`
  margin-left: auto;
  margin-right: 2em; /* Espaçamento entre o logo e o login */
`;

const LoginIcon = styled.img`
  height: 40px; 
`;

const Header = () => {
  return (
    <HeaderContainer>
      <MenuIcon src="/menu-hamburger.png" alt="Menu" />
      <LogoContainer>
        <Industrial>INDUSTRIAL</Industrial>
        <Ink>INK</Ink>
      </LogoContainer>
      <LoginContainer>
        <LoginIcon src="/login.png" alt="Login" />
      </LoginContainer>
    </HeaderContainer>
  );
};

export default Header;
