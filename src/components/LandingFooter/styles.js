import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  font-size: small;
  font-weight: 450;
  margin: 0rem;
  padding: 0.75rem 1rem;

  & > li {
    margin: 0.25rem 0em;
    padding: 0em 0.85rem 0em 0em;
    color: #5b7083;

    & > a {
      text-decoration: none;
      color: #5b7083;
    }
  }
`;
