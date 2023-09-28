import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  height: 84vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  padding-bottom: 30px;
`;

export const MainNoticeMessage = styled.div`
  ${({ theme }) => theme.font.fontType.headLine}
`;

export const SubNoticeMessage = styled.div`
  width: 80vw;
  padding-top: 10px;
  text-align: center;
  ${({ theme }) => theme.font.fontType.subHead}
`;
