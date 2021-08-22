import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

//Components
import TopBar from './TopBar';

//Icons
import Hamburger from '../assets/icons/hamburger.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <TextWrapper>
          <MenuIcon src={Hamburger} alt="menu icon" width={20} height={20} />
          <h3>ErhanNamal</h3>
        </TextWrapper>
        <TopBar />
      </Container>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  background-color: #ff5e58;
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 15px 0;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 0;
    font-size: 18px;
    color: white;
    font-weight: bold;
  }
`;

const MenuIcon  = styled.img`
  position: absolute;
  left: 0;
  cursor: pointer;
  @media (min-width: 768px) { 
    display: none;;
  }
`;

export default Header;
