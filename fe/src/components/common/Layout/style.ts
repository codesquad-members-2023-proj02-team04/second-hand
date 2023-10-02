import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BackgroundImg = styled.img`
  @media (max-width: 768px) {
    display: none;
  }

  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const DesktopView = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    position: fixed;
    flex-direction: column;
    right: 60vw;
    height: 800px;
  }
`;

export const MobileView = styled.div`
  @media (max-width: 768px) {
    width: 100vw - 2px;
    height: 100vh;

    ul {
      width: inherit;
      height: calc(100vh - 132px);
      overflow: auto;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        height: 5%;
        background: ${({ theme }) =>
          theme.color.colors.accentBackgroundPrimary};
        border-radius: 10px;
      }
      &::-webkit-scrollbar-track {
        background: rgba(255, 149, 0, 0.1);
      }
    }

    footer {
      position: fixed;
      bottom: 0;
    }
  }

  @media (min-width: 768px) {
    position: fixed;
    right: calc(45vw - 360px);
    width: 360px;
    height: 800px;
    background-color: ${({ theme }) => theme.color.colors.neutralBackground};
    border: 1px solid ${({ theme }) => theme.color.colors.neutralBorder};

    ul {
      height: 668px;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        height: 5%;
        background: ${({ theme }) =>
          theme.color.colors.accentBackgroundPrimary};
        border-radius: 10px;
      }
      &::-webkit-scrollbar-track {
        background: rgba(255, 149, 0, 0.1);
      }
    }

    footer {
      position: fixed;
      bottom: calc((100vh - 800px) / 2);
    }
  }
`;
