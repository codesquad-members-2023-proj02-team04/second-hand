import { Icon } from '@Components/common/Icon';
import React, { useState } from 'react';
import { palette } from '@Styles/color';
import * as S from './style';

interface ReportBoardProps {
  closeButtonHandler: () => void;
}

const ReportBoard = ({ closeButtonHandler }: ReportBoardProps) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const currentPage = window.location.pathname.slice(1);

  const handleAuthorInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setAuthor(value);
  };

  const handleUserInput = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = target.value;
    setText(value);
  };

  return (
    <S.Board>
      <S.Header>
        <S.Title>
          <Icon iconType="camera" width={25} height={25} fill={palette.black} />
          <S.InnerText>버그 제보하기</S.InnerText>
        </S.Title>
        <S.CloseButton>
          <Icon
            iconType="multiply"
            width={25}
            height={25}
            fill={palette.black}
            onClick={closeButtonHandler}
          />
        </S.CloseButton>
      </S.Header>
      <S.Content>
        <span>작성자</span>
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleAuthorInput}
        />
        <span>페이지</span>
        <input type="text" name="currentPage" value={currentPage} />
        <span>내용</span>
        <textarea value={text} onChange={handleUserInput} />
      </S.Content>
      <S.Footer>
        <span>제보는 프로젝트 Gihub Issue 탭에 등록됩니다.</span>
        <button>제출하기</button>
      </S.Footer>
    </S.Board>
  );
};

export default ReportBoard;
