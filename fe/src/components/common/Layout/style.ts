import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;

  ul {
    position: relative;
    max-width: 768px;
    top: 8vh;
    height: calc(100vh - 133px);
    padding: 1vh 0;
    overflow: auto;
    &:hover {
      &::-webkit-scrollbar-thumb {
        visibility: visible;
      }
    }
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      height: 5%;
      background: ${({ theme }) => theme.color.colors.accentBackgroundPrimary};
      visibility: hidden;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(255, 149, 0, 0.1);
    }
  }
`;

export const MobileView = styled.div`
  width: 390px;
  height: 800px;
`;

// width: 390px 844px
