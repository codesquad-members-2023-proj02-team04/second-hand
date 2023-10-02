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
  height: 70px;
`;

export const Title = styled.div`
  padding: 10px;
  font-size: 1.063rem;
  line-height: 1.5rem;
  font-weight: 800;
  margin-top: 1.5rem;

  strong {
    color: ${({ theme }) => theme.color.colors.accentBackgroundPrimary};
  }
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
  padding-top: 180px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  padding: 15px 0;
  bottom: 0;
  ${({ theme }) => theme.font.fontType.caption2};
`;
