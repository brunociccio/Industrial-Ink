import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;

    @media (min-width: 768px) {
        /* Styles for tablets and above */
    }

    @media (min-width: 1024px) {
        /* Styles for desktops and above */
    }
    `;

const Logo = styled.img`
    height: 40px;
`;

const MenuIcon = styled.img`
    height: 30px;
    cursor: pointer;
`;

const LoginIcon = styled.img`
    height: 40px;
    border-radius: 50%;
`;

const Header = () => {
    return (
        <HeaderContainer>
        <MenuIcon src="/menu-hamburger.png" alt="Menu" />
        <Logo src="/logo.png" alt="Logo" />
        <LoginIcon src="/login.png" alt="Login" />
        </HeaderContainer>
    );
};

export default Header;
