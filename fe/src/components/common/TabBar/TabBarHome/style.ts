import styled from 'styled-components';

interface ItemNameProps {
  isSelected: boolean;
}

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8vh;
  background: ${({ theme }) => theme.color.palette.gray50};
`;

export const Item = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
`;

export const ItemName = styled.div<ItemNameProps>`
  display: flex;
  justify-content: center;
  font-weight: 510;
  ${({ theme }) => theme.font.fontType.tab};
  color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.color.colors.accentBackgroundPrimary
      : theme.color.colors.neutralTextWeak};
`;
