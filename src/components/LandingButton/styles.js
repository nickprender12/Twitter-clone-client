import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const Btn = styled(Button)`
  background: ${(props) =>
    props.variant === 'primary' ? 'rgb(29, 161, 242)' : 'white'};
  color: ${(props) =>
    props.variant === 'primary' ? 'white' : 'rgb(29, 161, 242)'};
  font-size: 1em;
  font-weight: bold;
  padding: 0.7em 1em;
  border: 1px solid rgb(29, 161, 242);
  border-radius: 50px;
  outline: none;
  &:hover {
    background: ${(props) =>
      props.variant === 'primary'
        ? 'rgb(13, 145, 227, 1)'
        : 'rgba(13, 145, 227, 0.15)'};
    color: ${(props) =>
      props.variant === 'primary' ? 'white' : 'rgb(29, 161, 242)'};
    border: ${(props) =>
      props.variant === 'primary'
        ? '1px solid rgb(29, 161, 242)'
        : '1px solid rgb(29, 161, 242)'};
  }
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
    background: ${(props) =>
      props.variant === 'primary' ? 'rgb(29, 161, 242)' : 'white'};
    color: ${(props) =>
      props.variant === 'primary' ? 'white' : 'rgb(29, 161, 242)'};
  }
`;
