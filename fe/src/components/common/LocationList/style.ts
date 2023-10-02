import styled from 'styled-components';

export const Box = styled.ul`
  top: 0 !important;
`;

export const Item = styled.li`
  height: 20px;
  padding: 16px;
  ${({ theme }) => theme.font.fontType.callOut};
  border-bottom: 1px solid ${({ theme }) => theme.color.colors.neutralOverlay};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.palette.gray100};
  }
`;
