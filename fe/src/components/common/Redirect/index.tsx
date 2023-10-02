import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@Constants/route';
import * as S from './style';

interface RedirectProps {
  errorMessage: string | null;
  redirectTime?: number;
}

const Redirect = ({ errorMessage, redirectTime = 1000 }: RedirectProps) => {
  const navigate = useNavigate();

  const goToRootPage = () => {
    navigate(ROUTE_PATH.ROOT);
    window.location.reload();
  };

  useEffect(() => {
    setTimeout(() => goToRootPage(), redirectTime);
  }, [errorMessage]);

  return (
    <S.Layout>
      <S.Image src="https://user-images.githubusercontent.com/81420856/246175709-96210fb1-1836-477d-bc20-8e0df383eb9d.png" />
      <S.MainNoticeMessage>페이지를 찾을 수 없습니다.</S.MainNoticeMessage>
      <S.SubNoticeMessage>{errorMessage}</S.SubNoticeMessage>
      <S.SubNoticeMessage>
        잠시후 로그인 화면으로 이동됩니다.
      </S.SubNoticeMessage>
    </S.Layout>
  );
};

export default Redirect;
