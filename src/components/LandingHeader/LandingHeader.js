import React from 'react';
import { LandingButton, LandingLoginBar } from '../index';

import { Wrapper, Heading, CallToAction, HeaderBox } from './styles';
import logo from '../../resources/images/Twitter-Logo.svg';

const LandingHeader = (props) => {
  return (
    <Wrapper>
      <LandingLoginBar />
      <HeaderBox>
        <img src={logo} alt="Twitter Logo" height="35" />
        <Heading>Happening now</Heading>
        <CallToAction>Join Twitter today.</CallToAction>
        <div className={'btn'}>
          <LandingButton text={'Sign up'} variant="primary" tabIndex="1" />
          <LandingButton text={'Log in'} tabIndex="2" />
        </div>
      </HeaderBox>
    </Wrapper>
  );
};

export default LandingHeader;
