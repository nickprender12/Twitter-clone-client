import React from 'react';

import { Wrapper, Svg } from './styles';
import logo from '../../resources/images/Twitter-Logo.svg';

const LandingBanner = (props) => {
  return (
    <Wrapper>
      <Svg>
        <img src={logo} alt="Twitter Logo" height="240" />
      </Svg>
    </Wrapper>
  );
};

export default LandingBanner;
