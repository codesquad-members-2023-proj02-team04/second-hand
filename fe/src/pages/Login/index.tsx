import Button from '@Components/common/Button';

import Layout from '@Components/common/Layout';
import * as S from './style';

const Login = () => {
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`;

  const gitHubLoginHandler = () => {
    window.location.href = githubURL;
  };

  return (
    <Layout>
      <S.Layout>
        <S.ImgBox src="https://user-images.githubusercontent.com/81420856/247801442-217f470b-5a61-4fea-9dd6-66d29a8702d9.png" />
        <S.Title>
          당신 근처의 <strong>Second Hand</strong>
        </S.Title>
        <S.SubTitle>중고 거래부터 동네 정보까지,</S.SubTitle>
        <S.SubTitle>지금 내 동네를 선택하고 시작해보세요!</S.SubTitle>
        <S.LoginButtonBox>
          <Button
            buttonType="rectangle"
            buttonState="active"
            size="L"
            title="Github 로그인"
            iconType="githubLogo"
            onClick={gitHubLoginHandler}
          />
        </S.LoginButtonBox>
        <S.Footer>
          Copyright ⓒ 2023 코드스쿼드 danggn4jo All rights reserved
        </S.Footer>
      </S.Layout>
    </Layout>
  );
};

export default Login;
