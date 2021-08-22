import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Box = ({ bgColor, icon, title, count, big}) => {
  return (
    <Wrapper bgColor={bgColor} big={big}>
      <img src={icon}  alt="box icon"/>
      <TextWrapper>
        <Count>{count}</Count>
        <Title>{title}</Title>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: center;
  border-radius: 8px;
  min-height: 100px;
  ${({bgColor}) => `background-color: ${bgColor};`}
  ${({big}) => big && `
    min-height: 210px;
    flex-direction: column;
    justify-content: center;
  `}
  margin-bottom: 10px;
  img {
    width: 30px;
    ${({big}) => big && `
      margin-bottom: 15px;
    `}
    @media (min-width: 768px) { 
      width: 45px;
    }
  }

  @media (min-width: 768px) { 
    padding: 0px 15px;
    margin-bottom: 24px;
    ${({big}) => big && `
      min-height: 224px;
    `}
  }

`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 10px;
`;

const Count = styled.span`
  font-size: 24px;
  line-height: 1;
  margin: 0;
  font-weight: bold;
`;

const Title = styled.span`
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
  font-weight: bold;
`;

Box.propTypes = {
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}

export default Box;
