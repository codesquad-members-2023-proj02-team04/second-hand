import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5vh 0;
  position: fixed;
  bottom: 0;
  width: inherit;
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.gray50};
`;

export const SendField = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 10px;
  width: 100%;
  justify-content: center;
`;
