import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

//Components
import Header from '../components/Header';
import Box from '../components/Box';
import MedalButton from '../components/MedalButton';

//Icons
import StarIcon from '../assets/icons/star.png';
import SurveyIcon from '../assets/icons/survey.png';
import SurveyIcon2 from '../assets/icons/survey-2.png';
import SurveyIcon3 from '../assets/icons/survey-3.png';
import BoxIcon from '../assets/icons/box.png';
import ReviewIcon from '../assets/icons/review.png';
import ProfileIcon from '../assets/icons/profile.png';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Boxs>
          <Row>
            <Col xs={6}>
              <Box bgColor="#F5B8A9" count={0} title="Puanım" icon={StarIcon} />
              <Box bgColor="#70D5AD" count={2} title="Yapılacak Anketler" icon={SurveyIcon} />
              <Box bgColor="#E58192" count={3} title="Yaptığım Anketler" icon={SurveyIcon2}/>
              <Box big bgColor="#9F95C1" count={2} title="Yaptığım Ürün Değerlendirmeleri" icon={ReviewIcon} />
            </Col>
            <Col xs={6}>
            <Box big bgColor="#AFA6CC" count={2} title="Profil Eksiklerim" icon={ProfileIcon} />
            <Box bgColor="#F5B8A9" count={2} title="Yapilacak Ürün Anketleri" icon={SurveyIcon3} />
            <Box big bgColor="#65C8A1" count={2} title="Aldığım Kutular" icon={BoxIcon} />
            </Col>
          </Row>
        </Boxs>
       <MedalButton />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 20px;
`;

const Boxs = styled.div`
  padding-top: 12px;
  @media (min-width: 768px) { 
    padding-top: 24px;
  }
`;

export default Home;
