import styled from 'styled-components';

interface ItemNameProps {
  isSelected: boolean;
}

export const Box = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background: ${({ theme }) => theme.color.palette.gray50};

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: inherit;
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
  cursor: pointer;
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
