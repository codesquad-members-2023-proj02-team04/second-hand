import Button from '@Components/common/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@Constants/route';
import { Chat } from '@Types/index';
import * as S from './style';

const ChatList = () => {
  const navigate = useNavigate();
  const [Products] = useState<Chat[]>([
    {
      chatId: 1,
      profileImage:
        'https://user-images.githubusercontent.com/81420856/246175709-96210fb1-1836-477d-bc20-8e0df383eb9d.png',
      timeStamp: 4,
      user: '삼만보',
      description: '안녕하세요! 궁금한 점이 있어서 챗 드립니다',
      productImage:
        'https://user-images.githubusercontent.com/81420856/246175709-96210fb1-1836-477d-bc20-8e0df383eb9d.png',
    },
  ]);

  const handleItemClick = (chatId: number) => {
    navigate(`${ROUTE_PATH.CHAT_ROOM}/${chatId}`);
  };

  return (
    <S.Layout>
      {Products &&
        Products.map(
          ({
            chatId,
            profileImage,
            timeStamp,
            user,
            description,
            productImage,
          }) => (
            <S.Item
              key={chatId}
              onClick={() => {
                handleItemClick(chatId);
              }}
            >
              <S.ProfileImg src={profileImage} />
              <S.Body>
                <S.Title>
                  {user}
                  <S.TimeStamp>{timeStamp}</S.TimeStamp>
                </S.Title>
                <S.Description>{description}</S.Description>
              </S.Body>
              <Button
                buttonType="circle"
                buttonState="active"
                size="S"
                title="1"
              />
              <S.ProductImg src={productImage} />
            </S.Item>
          ),
        )}
    </S.Layout>
  );
};

export default ChatList;
