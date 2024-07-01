"use client";
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
    0%, 100% {
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
`;

const NavLink = styled.a`
    font-family: 'Orbitron', sans-serif;
    font-size: 0.9em;
    text-decoration: none;
    padding: 0.5em 1em;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        color: #DAA520;
    }
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 0.5em;
    animation: ${fadeInOut} 4s infinite;
`;

const DropdownMenu = styled.div<{ open: boolean }>`
    position: absolute;
    top: 60px;
    right: 0.8em;
    background-color: #000;
    border: 1px solid #DAA520;
    padding: 1em;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    left: 0.8em; 
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
            <NavLink href="/portfolios">PORTFÓLIOS</NavLink>
            <NavLink href="/orcamentos">ORÇAMENTOS</NavLink>
            <NavLink href="/outros">OUTROS</NavLink>
            </DropdownMenu>
        </TopRow>
        <LinkRow>
            <NavLink href="#tattoo">
            <Image src="/tattoo.png" alt="Tattoo" />
            TATTOO
            </NavLink>
            <NavLink href="#piercing">
            <Image src="/piercing.png" alt="Piercing" />
            PIERCING
            </NavLink>
            <NavLink href="#remocao">
            <Image src="/remocao.png" alt="Remocao" />
            REMOÇÃO
            </NavLink>
        </LinkRow>
        </HeaderContainer>
    );
};

export default Header;
