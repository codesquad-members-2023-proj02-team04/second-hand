import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5vh 0;
  position: fixed;
  width: inherit;
  gap: calc(100% * 0.45);
  bottom: 0px;
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.gray50};
`;

export const Item = styled.div`
  display: flex;
  gap: 0.312rem;
`;
