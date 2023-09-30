import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ImgBox = styled.img`
  padding: 10px;
  height: 10vh;
`;

export const Title = styled.div`
  padding: 10px;
  font-size: 1.063rem;
  line-height: 1.5rem;
  font-weight: 800;
`;

export const SubTitle = styled.div`
  font-size: 0.938rem;
  line-height: 1.25rem;
  font-weight: 500;
`;

export const LoginButtonBox = styled.div`
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 20vh;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  padding: 15px 0;
  bottom: calc((100vh - 800px) / 2 + 20px);
  ${({ theme }) => theme.font.fontType.caption2};
`;
