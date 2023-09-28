import ChatBubble from '@Components/ChatRoom/ChatBubble';
import Layout from '@Components/common/Layout';
import { NavBarBackBtn } from '@Components/common/NavBar/NavBarBackBtn';
import { TabBarChat } from '@Components/common/TabBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const ChatRoom = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState('');
  const [myChats, setMyChats] = useState<string[]>([]);

  const handleBackBtnClick = () => {
    // TODO: 분기처리하기
    navigate('/chat');
  };

  return (
    <Layout>
      <NavBarBackBtn
        prev="뒤로"
        handlePrev={handleBackBtnClick}
        center="삼만보"
      />
      <S.Product>
        <S.ProductImg src="https://user-images.githubusercontent.com/81420856/246175709-96210fb1-1836-477d-bc20-8e0df383eb9d.png" />
        <S.ProductBody>
          <S.ProductName>빈티지 롤러스케이트</S.ProductName>
          <S.Price>19,000원</S.Price>
        </S.ProductBody>
      </S.Product>
      <S.TopBox />
      <S.ChatBox>
        {myChats.length > 0 &&
          myChats.map((chat, index) => (
            <ChatBubble key={index} type="my" title={chat} />
          ))}
      </S.ChatBox>
      <S.BottomBox />
      <TabBarChat
        formValue={formValue}
        setFormValue={setFormValue}
        handleChatSubmit={setMyChats}
      />
    </Layout>
  );
};

export default ChatRoom;
