import React from 'react';
import { Btn } from './styles';

// eslint-disable-next-line react/prop-types
const LandingButton = ({ text, variant }) => {
  return <Btn variant={variant}>{text}</Btn>;
};

export default LandingButton;
