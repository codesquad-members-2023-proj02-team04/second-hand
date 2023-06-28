import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  .user-info_box {
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }
`;

export const BtnBox = styled.div`
  padding: 10px 10px 0px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  background: ${({ theme }) => theme.color.colors.neutralBackgroundWeak};
  width: 90vw;
  height: 5vh;
  border-radius: 11px;
  justify-content: space-between;
  padding: 10px;
  .user-category {
    color: ${({ theme }) => theme.color.colors.neutralText};
  }
  .user-id {
    color: ${({ theme }) => theme.color.colors.neutralTextStrong};
  }
`;

export const NavBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94vw;
  height: 5vh;
  align-items: center;
  padding: 10px;
  position: absolute;
`;

export const DimmedBox = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color.colors.neutralOverlay};
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;

export const DotBox = styled.div`
  position: absolute;
  top: 31vh;
  left: 50vw;
`;
