import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1vw;

  @media (max-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
