import React from 'react';
import { LandingFooter, LandingBanner, LandingHeader } from '../index';
import LandingLoginBar from '../LandingLoginBar';
import { Wrapper, LandingWrapper } from './styles';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Landing = (props) => {
  return (
    <LandingWrapper>
      <Wrapper>
        <div className={'hd'}>
          {/* <LandingLoginBar /> */}
          <LandingHeader />
        </div>
        <div className={'banner'}>
          <LandingBanner />
        </div>
      </Wrapper>
      <div className={'footer'}>
        <LandingFooter />
      </div>
    </LandingWrapper>
  );
};

export default Landing;
