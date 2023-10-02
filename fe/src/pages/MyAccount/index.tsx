import Logout from '@Components/MyAccount/Logout';
import Layout from '@Components/common/Layout';
import { NavBarDefault } from '@Components/common/NavBar/NabBarDefault';
import { TabBarHome } from '@Components/common/TabBar';
import UserProfile from '@Components/common/UserProfile';
import { useUserInfoContext } from '@Contexts/userInfoContext';
import { LocalError } from '@Error/LocalError';
import { ERROR_MESSAGE } from '@Constants/index';

const MyAccount = () => {
  const { userInfo } = useUserInfoContext();

  if (!userInfo) {
    throw new LocalError(ERROR_MESSAGE.refresh);
  }

  return (
    <Layout>
      <NavBarDefault title="내 계정" />
      <UserProfile avatar={userInfo.avatar} username={userInfo.username}>
        <Logout />
      </UserProfile>
      <TabBarHome currentPage="account" />
    </Layout>
  );
};

export default MyAccount;
