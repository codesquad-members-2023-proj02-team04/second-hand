import styled from 'styled-components';

interface ItemNameProps {
  isSelected?: boolean;
}

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  margin: 30px 0;
  gap: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 50px;
  flex-direction: column;
  cursor: pointer;
`;

export const ItemName = styled.div<ItemNameProps>`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.font.fontType.tab};
  color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.color.colors.accentBackgroundPrimary
      : theme.color.colors.accentTextWeak};
`;
