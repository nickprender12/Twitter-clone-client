import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { Wrapper, Btn } from './styles';

const LandingLoginBar = (props) => {
  return (
    <Wrapper>
      <div className={'form'}>
        <Form.Group
          controlId="formBasicEmail"
          style={{ margin: '0px', padding: '16px' }}
        >
          <Form.Control type="email" placeholder="Phone, email, or username" />
        </Form.Group>
        <Btn type="submit">Log in</Btn>
      </div>
    </Wrapper>
  );
};

export default LandingLoginBar;
