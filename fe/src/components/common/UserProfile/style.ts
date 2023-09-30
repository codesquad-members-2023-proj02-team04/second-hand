import styled from 'styled-components';

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    height: calc(100vh - 131px);
  }

  @media (min-width: 768px) {
    height: 669px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const UserImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const NoticeBox = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserId = styled.div`
  padding-left: 5px;
  ${({ theme }) => theme.font.fontType.title2};
  color: ${({ theme }) => theme.color.colors.neutralTextStrong};
`;
