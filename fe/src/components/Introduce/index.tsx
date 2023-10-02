import { useUserInfoContext } from '@Contexts/userInfoContext';
import { useState } from 'react';
import LinkButton from './LinkButton';
import PageGuide from './PageGuide';
import ReportBoard from './ReportBoard';
import * as S from './style';

const Introduce = () => {
  const {
    userInfo: { userId },
  } = useUserInfoContext();
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <S.Introduce>
      <S.Logo>
        <S.LogoImg>🥕</S.LogoImg>
        <S.Brand>
          <strong>Second Hand</strong> Market
        </S.Brand>
      </S.Logo>
      <S.Title>
        <span>
          <strong>중고 거래</strong> 더 쉽고 편하게
        </span>
        <span>
          <strong>Second Hand</strong>
        </span>
      </S.Title>
      <S.Description>
        <span>2023 코드스쿼드 FINAL 팀 프로젝트</span>
        <span>danggn4jo 팀의 Second Hand Market 입니다.</span>
        <span>해당 사이트는 당근마켓을 모티브로 제작되었습니다.</span>
      </S.Description>
      {userId && !isReportModalOpen ? <PageGuide /> : ''}
      {isReportModalOpen && (
        <ReportBoard
          closeButtonHandler={() => setIsReportModalOpen((prev) => !prev)}
        />
      )}
      <S.Footer>
        <S.SelectBox>
          {isReportModalOpen ? (
            ''
          ) : (
            <LinkButton
              iconType="camera"
              text="버그 제보하기"
              iconHandler={() => setIsReportModalOpen((prev) => !prev)}
            />
          )}
          <LinkButton
            iconType="githubLogo"
            text="프로젝트 코드 보러가기"
            iconHandler={() =>
              window.open(
                'https://github.com/codesquad-members-2023-proj02-team04/second-hand/tree/dev-fe/fe',
                '_blank',
              )
            }
          />
        </S.SelectBox>
      </S.Footer>
    </S.Introduce>
  );
};

export default Introduce;
