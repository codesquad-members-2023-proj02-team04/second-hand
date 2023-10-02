import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: inherit;
  height: 60px;
  background: ${({ theme }) => theme.color.palette.gray50};
  gap: 210px;
`;

export const Item = styled.div`
  display: flex;
  gap: 0.312rem;
  ${({ theme }) => theme.font.fontType.footNote};
`;

export const ItemName = styled.div`
  display: flex;
  justify-content: center;
`;
