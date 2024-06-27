// src/components/BackgroundImage.tsx

import styled from 'styled-components';

const ImageContainer = styled.div`
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover; 
    position: absolute;
    left: 0;
    top: 5em;
`;

const BackgroundImage = () => {
    return (
        <ImageContainer>
            <Image src="/background-home.jpg" alt="Background" />
        </ImageContainer>
    );
};

export default BackgroundImage;


