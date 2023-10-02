import ChatList from '@Components/Chat/ChatList';
import Layout from '@Components/common/Layout';
import { NavBarDefault } from '@Components/common/NavBar/NabBarDefault';
import { TabBarHome } from '@Components/common/TabBar';
import useFetch from '@Hooks/useFetch';
import { ChatResponseData } from '@Types/index';

const Chat = () => {
  const { data: ChatData } = useFetch<ChatResponseData>({
    suspense: false,
  });

  return (
    <Layout>
      <NavBarDefault title="채팅" />
      {!ChatData && <ChatList />}
      <TabBarHome currentPage="chat" />
    </Layout>
  );
};
export default Chat;
