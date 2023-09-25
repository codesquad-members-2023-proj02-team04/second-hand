import Button from '@Components/common/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@Constants/route';
import * as S from './style';

const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('JWTToken');
    navigate(ROUTE_PATH.ROOT);
  };

  return (
    <S.AddLocationButtonBox>
      <Button
        buttonType="rectangle"
        buttonState="active"
        size="L"
        title="로그아웃"
        onClick={logoutHandler}
      />
    </S.AddLocationButtonBox>
  );
};

export default Logout;
