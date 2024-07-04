import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeInOut = (delay: number) => keyframes`
  0%, ${delay}% {
    opacity: 0;
  }
  ${delay + 10}%, ${delay + 40}% {
    opacity: 1;
  }
  ${delay + 50}%, 100% {
    opacity: 0;
  }
`;

const ImageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 5em;
  left: 0;
  z-index: -1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 53% center; 
`;

const WhatsAppButtonContainer = styled.div`
  position: absolute;
  bottom: 12em;
  right: 2em;
  z-index: 1;
`;

const WhatsAppButton = styled.a`
  width: 60px;
  height: 60px;
  background-image: url('/botao-whatsapp-2.png');
  background-size: cover;
  background-position: center;
  display: block;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 7em;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1em;
  z-index: 1;
`;

const Button = styled.a`
  width: 150px; 
  padding: 1.2em 1em;
  background-color: #333333;
  color: white;
  text-decoration: none;
  border-radius: 0.8em;
  font-family: 'Syncopate', sans-serif;
  font-weight: 600; 
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #FFEA70;
    color: #000;
    font-weight: bold;
  }
`;

const NeonTextContainer = styled.div`
  position: absolute;
  top: 16%;
  right: 1em;
  transform: translateY(-50%);
  text-align: right;
  z-index: 1;
`;

const NeonText = styled.div<{ delay: number }>`
  font-family: 'Courier Prime', monospace;
  color: #FFEA70; 
  text-shadow: 0 0 5px #FFEA70, 0 0 20px #FFEA70, 0 0 30px #FFD700;
  font-size: 1.6em;
  margin: 0.3em 0;
  opacity: 0;
  animation: ${({ delay }) => fadeInOut(delay)} 5s linear infinite;
`;

const BackgroundImage = () => {
  return (
    <ImageContainer>
      <Image src="/background-home-3.jpg" alt="Background" />
      <WhatsAppButtonContainer>
        <WhatsAppButton href="https://api.whatsapp.com/send?phone=5511993671709&text=Informa%C3%A7%C3%B5es%20necess%C3%A1rias:%20artista%20de%20prefer%C3%AAncia%20(nome),%20local%20do%20corpo,%20tamanho%20em%20cent%C3%ADmetros,%20pb%20ou%20colorido.%20Imagens,%20refer%C3%AAncias%20ou%20uma%20breve%20explica%C3%A7%C3%A3o%20da%20ideia." target="_blank" />
      </WhatsAppButtonContainer>
      <NeonTextContainer>
        <NeonText style={{ marginRight: '1.8em' }} delay={20}>Eternizamos</NeonText>
        <NeonText style={{ marginRight: '0.7em' }} delay={30}>suas ideias em</NeonText>
        <NeonText delay={40}>artes únicas!</NeonText>
      </NeonTextContainer>
      <ButtonContainer>
        <Button href="/orcamentos">ORÇAMENTO</Button>
        <Button href="/portfolios">PORTFÓLIOS</Button>
      </ButtonContainer>
    </ImageContainer>
  );
};

export default BackgroundImage;
