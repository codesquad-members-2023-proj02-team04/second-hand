import styled from 'styled-components';

export const ButtonBox = styled.div`
  position: fixed;
  bottom: calc(100vh * 0.15);

  margin: -20px;

  @media screen and (max-width: 768px) {
    right: calc(100vw * 0.15);
  }

  @media screen and (min-width: 768px) {
    right: calc(100vw * 0.35);
  }
`;
