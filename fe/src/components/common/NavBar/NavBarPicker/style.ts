import styled from 'styled-components';

export const Layout = styled.div`
  width: 19vw;
  height: 3.3vh;
  background: ${({ theme }) => theme.color.palette.gray400};
  border-radius: 8px;
  margin-bottom: 1vh;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.font.fontType.footNote}
`;

export const PickerBox = styled.div<{ isLeft: boolean }>`
  width: 19vw;
  height: 2.9vh;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isLeft, theme }) => isLeft && theme.mixin.navBarMixin.pickerNavBar}
`;
