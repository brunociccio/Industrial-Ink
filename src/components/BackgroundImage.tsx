// src/components/BackgroundImage.tsx

import styled from 'styled-components';

const ImageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1em;
  z-index: 1;
`;

const Button = styled.a`
  width: 150px; /* Tamanho fixo para largura */
  padding: 1.2em 1em;
  background-color: #333333;
  color: white;
  text-decoration: none;
  border-radius: 0.8em;
  font-family: 'Syncopate', sans-serif;
  font-weight: 500; 
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #DAA520;
    color: #000;
    font-weight: bold;
  }
`;


const BackgroundImage = () => {
  return (
    <ImageContainer>
      <Image src="/background-home.jpg" alt="Background" />
      <ButtonContainer>
        <Button href="/orcamentos">ORÇAMENTO</Button>
        <Button href="/portfolios">PORTFÓLIOS</Button>
      </ButtonContainer>
    </ImageContainer>
  );
};

export default BackgroundImage;








