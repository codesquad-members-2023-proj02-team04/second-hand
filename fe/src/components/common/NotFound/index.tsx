import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@Constants/route';
import * as S from './style';
import Button from '../Button';
import Layout from '../Layout';

interface NotFoundProps {
  errorMessage: string | null;
}

const NotFound = ({ errorMessage }: NotFoundProps) => {
  const navigate = useNavigate();

  const goToRootPage = () => {
    navigate(ROUTE_PATH.ROOT);
    window.location.reload();
  };

  return (
    <Layout>
      <S.Layout>
        <S.Image src="https://user-images.githubusercontent.com/81420856/246175709-96210fb1-1836-477d-bc20-8e0df383eb9d.png" />
        <S.MainNoticeMessage>페이지를 찾을 수 없습니다.</S.MainNoticeMessage>
        <S.SubNoticeMessage>{errorMessage}</S.SubNoticeMessage>
        <S.RedirectButton>
          <Button
            title="로그인 화면으로 이동"
            buttonType="rectangle"
            buttonState="active"
            size="M"
            onClick={() => goToRootPage()}
          />
        </S.RedirectButton>
      </S.Layout>
    </Layout>
  );
};

export default NotFound;
