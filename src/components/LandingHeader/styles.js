import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (min-width: 501px) and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
  @media all and (min-width: 1001px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 45vw;
    min-height: 481px;
    /* width: 477px; */
    padding: 16px;
    position: relative;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  max-width: 615px;
  padding: 2.5rem;

  & > .btn {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0rem;
    width: 100%;
    padding: 0rem;

    & > Button {
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 501px) and (max-width: 1000px) {
    & > .btn {
      display: flex;
      flex-direction: row;
      /* margin: 0.5rem 0rem; */
      width: 100%;
      padding: 0rem;

      & > Button {
        margin-right: 1rem;
        width: 100%;
      }
    }
  }
  @media all and (min-width: 1001px) {
    width: 100%;
    min-width: 437px;
    max-width: 760px;
    padding: 20px;
    & > .btn {
      /* margin: 0.5rem 0rem; */
      max-width: 70%;
      /* padding: 0rem; */
    }
  }
`;

export const Heading = styled.h1`
  font-size: 2.75rem;
  font-weight: 800;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  text-align: left;
  max-width: 400px;
  @media (min-width: 501px) and (max-width: 1000px) {
    font-size: 4rem;
    font-weight: 800;
    text-align: left;
  }
  @media all and (min-width: 1001px) {
    font-size: 4.5rem;
    font-weight: 800;
    white-space: nowrap;
  }
`;

export const CallToAction = styled.span`
  font-size: 1.25rem;
  font-weight: 850;
  margin-bottom: 0.5rem;
  @media (min-width: 501px) and (max-width: 1000px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  @media all and (min-width: 1001px) {
    font-size: 2.25rem;
    font-weight: 800;
  }
`;
