import styled from 'styled-components';

export const Box = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background: ${({ theme }) => theme.color.palette.gray50};

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: inherit;
  }
`;

export const SendField = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 10px;
  width: 100%;
  justify-content: center;
`;
