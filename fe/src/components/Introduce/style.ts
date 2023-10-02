import styled from 'styled-components';

export const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 20px;
  align-items: flex-start;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 5px;
  font-weight: bold;
`;

export const LogoImg = styled.p`
  font-size: 20px;
`;

export const Brand = styled.p`
  > strong {
    color: ${({ theme }) => theme.color.colors.accentBackgroundPrimary};
  }
`;

export const Title = styled.title`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 35px;
  font-weight: bold;
  margin: 90px 0 30px 0;

  strong {
    color: ${({ theme }) => theme.color.colors.accentBackgroundPrimary};
  }
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.font.fontType.tab};

  span {
    height: 20px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 40px 0;
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 20px;
`;
