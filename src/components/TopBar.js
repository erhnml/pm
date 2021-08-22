import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

//Icons
import FlowIcon from '../assets/icons/flow.png';
import UserIcon from '../assets/icons/user.png'

const TopBar = () => {
  return (
    <Row>
      <Col xs={6}>
        <TopBarItem>
         <img src={FlowIcon} alt="flow icon" width={20} height={20}/>
         <span>Akışım</span>
        </TopBarItem>
      </Col>
      <Col xs={6}>
       <TopBarItem>
         <img src={UserIcon} alt="user icon" width={20} height={20}/>
         <span>Sayfam</span>
       </TopBarItem>
      </Col>
    </Row>
  );
}

const TopBarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  span {
    margin-top: 10px;
    color: white;
    font-size: 14px;
  }
`;


export default TopBar;
