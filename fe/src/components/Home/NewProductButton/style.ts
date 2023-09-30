import styled from 'styled-components';

export const ButtonBox = styled.div`
  position: absolute;

  @media (max-width: 768px) {
    bottom: calc(100vh * 0.13);
    right: calc(100vw * 0.12);
  }

  @media (min-width: 768px) {
    bottom: 90px;
    right: 40px;
  }
`;
