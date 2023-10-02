import Button from '@Components/common/Button';
import { Icon } from '@Components/common/Icon';
import { Spinner } from '@Components/common/Spinner';
import React, { useEffect, useRef, useState } from 'react';
import { API_STATUS } from '@Constants/index';
import { palette } from '@Styles/color';
import useFetch from '@Hooks/useFetch';
import * as S from './style';

interface ReportBoardProps {
  closeButtonHandler: () => void;
}

const ReportBoard = ({ closeButtonHandler }: ReportBoardProps) => {
  const [author, setAuthor] = useState('');
  const [page, setPage] = useState(window.location.pathname.slice(1));
  const [description, setDescription] = useState('');
  const boardRef = useRef<HTMLDivElement>(null);

  const { status: reportApiSatatus, fetch } = useFetch({
    suspense: false,
    mockTest: true,
  });

  const handleAuthorInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setAuthor(value);
  };

  const handlePageInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setPage(value);
  };

  const handleDescriptionInput = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = target.value;
    setDescription(value);
  };

  // TODO(덴): API 구현 후 fetch 함수 수정
  const handleSubmit = async () => {
    fetch({
      fetchFn: () =>
        new Promise<Response>((resolve) => {
          setTimeout(() => {
            resolve(new Response());
          }, 1000);
        }),
    });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (boardRef.current && !boardRef.current.contains(e.target as Node)) {
        closeButtonHandler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [boardRef]);

  return (
    <S.Board ref={boardRef}>
      {reportApiSatatus === API_STATUS.SUCCESS && (
        <S.SuccesBox>
          <span>
            <strong>제보</strong> 가 완료되었습니다.
          </span>
          <span>
            <strong>소중한 의견</strong> 을 바탕으로
          </span>
          <span>
            <strong>더 나은 서비스</strong> 를 제공하겠습니다.
          </span>
          <span>감사합니다 🥕</span>
          <Button
            buttonType="ellipse"
            buttonState="active"
            size="S"
            title="확인"
            onClick={closeButtonHandler}
          />
        </S.SuccesBox>
      )}
      {reportApiSatatus === API_STATUS.LOADING && (
        <S.LoadingBox>
          <Spinner isDynamic={true} />
        </S.LoadingBox>
      )}
      {reportApiSatatus === API_STATUS.IDLE && (
        <>
          <S.Header>
            <S.Title>
              <Icon
                iconType="camera"
                width={25}
                height={25}
                fill={palette.black}
              />
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
            <input
              type="text"
              name="currentPage"
              value={page}
              onChange={handlePageInput}
            />
            <span>내용</span>
            <textarea value={description} onChange={handleDescriptionInput} />
          </S.Content>
          <S.Footer>
            <span>소중한 의견 감사합니다.</span>
            <button onClick={handleSubmit}>제출하기</button>
          </S.Footer>
        </>
      )}
    </S.Board>
  );
};

export default ReportBoard;
