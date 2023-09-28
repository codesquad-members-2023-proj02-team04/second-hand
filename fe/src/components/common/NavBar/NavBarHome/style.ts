import styled from 'styled-components';

export const Layout = styled.div`
  align-items: center;
  justify-content: center;
  padding: 0px 0.8em 1.5vh 0.8em;
  border: 1px solid ${({ theme }) => theme.color.palette.gray200};
  ${({ theme }) =>
    theme.mixin.navBarMixin.commonNavBar({ height: '6.5vh', width: '92.5vw' })};
`;

export const AddressBox = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: ${({ theme }) => theme.color.colors.neutralBackgroundBlur};
  ${({ theme }) => theme.font.fontType.body};
  gap: 0.1em;
`;

export const CategoryBox = styled.div`
  display: flex;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 8vh;
  border: 1px solid ${({ theme }) => theme.color.colors.neutralOverlay};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.colors.neutralBackground};
  z-index: 1;
`;

export const Town = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  width: 45vw;
  padding: 0.7vh 0 0.7vh 5vw;
  border: none;
  border-bottom: 1px solid
    ${({ theme }) => theme.color.colors.neutralBackgroundBold};
  ${({ theme }) => theme.font.fontType.body};
  background: none;
`;

export const TownSetting = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0.7vh 0 0.7vh 5vw;
  ${({ theme }) => theme.font.fontType.body}
`;
