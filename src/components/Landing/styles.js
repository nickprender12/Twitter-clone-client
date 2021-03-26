import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  @media all and (min-width: 1001px) {
    flex-direction: row;
    height: 93vh;
    width: 85vw;
    & > .hd:nth-of-type(1) {
      order: 2;
    }
    & > .banner:nth-of-type(2) {
      order: 1;
    }
  }
`;

export const LandingWrapper = styled.div`
  @media all and (min-width: 1001px) {
    height: 100vh;
  }
`;
