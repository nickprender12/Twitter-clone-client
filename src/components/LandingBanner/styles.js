import styled from 'styled-components';
import banner from '../../resources/images/banner-image.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100vw;
  /* width: 100vw; */
  height: 45vh;
  background-image: url(${banner});
  @media all and (min-width: 1001px) {
    display: flex;
    height: 100%;
    min-height: 481px;
    min-width: 40vw;
  }
`;

export const Svg = styled.div`
  filter: brightness(0) saturate(100%) invert(90%) sepia(49%) saturate(17%)
    hue-rotate(240deg) brightness(112%) contrast(103%);
  max-height: 380px;
`;
