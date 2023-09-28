import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: inherit;
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.gray50};
  padding: 0.5vh 1rem 1.125rem 1rem;
`;

export const Item = styled.div`
  display: flex;
  gap: 0.312rem;
`;

export const ItemName = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.font.fontType.footNote};
`;
