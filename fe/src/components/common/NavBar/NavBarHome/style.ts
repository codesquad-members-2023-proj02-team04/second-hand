import styled from 'styled-components';

export const Layout = styled.div`
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5vh;
  border: 1px solid ${({ theme }) => theme.color.palette.gray200};
  ${({ theme }) => theme.mixin.navBarMixin.commonNavBar({ height: '6.5vh' })};
`;

export const AddressBox = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: ${({ theme }) => theme.color.colors.neutralBackgroundBlur};
  ${({ theme }) => theme.font.fontType.body};
  gap: 0.1em;
  cursor: pointer;
`;

export const CategoryBox = styled.div`
  display: flex;
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 50%;
  top: 8vh;
  border: 1px solid ${({ theme }) => theme.color.colors.neutralOverlay};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.colors.neutralBackground};
  z-index: 1;
`;

export const Town = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${({ theme }) => theme.color.colors.neutralBackgroundBold};
  ${({ theme }) => theme.font.fontType.body};
  background: none;
  cursor: pointer;
`;

export const TownSetting = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  ${({ theme }) => theme.font.fontType.body};
  cursor: pointer;
`;
