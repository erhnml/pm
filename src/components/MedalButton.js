import React from 'react';
import styled from 'styled-components';

//Icons
import MedalIcon from '../assets/icons/medal.png';

const MedalButton = () => {
  return (
    <Wrapper>
      <img src={MedalIcon} alt="medal icon" />
      <span>Kazanmak İstiyorum</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff5e58;
  border-radius: 50px;
  padding: 10px;
  width: 250px;
  margin: 0 auto;
  cursor: pointer;
  img {
    width: 20px;
    margin-right: 10px;
    @media (min-width: 768px) { 
      width: 30px;
    }
  }
  span {
    color: white;
    font-size: 14px;
    font-weight: bold;
    @media (min-width: 768px) { 
      font-size: 16px;
    }
  }

  @media (min-width: 768px) { 
    width: 350px;
  }
`;

export default MedalButton;
