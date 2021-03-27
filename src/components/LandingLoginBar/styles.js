import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Wrapper = styled(Form)`
  @media (max-width: 1000px) {
    display: none;
  }
  position: absolute;
  top: 16px;
  left: 32px;

  & > .form {
    display: flex;
    /* flex-direction: row; */
    justify-items: center;
    align-items: center;
    margin: 0px;
    /* width: 300px; */
  }
`;

export const Btn = styled(Button)`
  background: transparent;
  color: rgb(29, 161, 242);
  font-size: 1em;
  font-weight: bold;
  padding: 0.7em 2em;
  border: 1px solid rgb(29, 161, 242);
  border-radius: 50px;
  outline: none;
  &:hover {
    background: rgb(13, 145, 227, 1);
    color: white;
    border: 1px solid rgb(29, 161, 242);
  }
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
    background: rgb(29, 161, 242);
    color: white;
  }
`;
