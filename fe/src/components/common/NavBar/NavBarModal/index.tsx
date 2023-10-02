import { MouseEvent } from 'react';

import * as S from './style';
interface ModalProps {
  prev?: string;
  center?: string;
  next?: string;
  handlePrev?: (e: MouseEvent<HTMLButtonElement>) => void;
  handleNext?: (e: MouseEvent<HTMLButtonElement>) => void;
  isActivePrev?: boolean;
  isActiveNext?: boolean;
}
export const NavBarModal = ({
  prev,
  center,
  next,
  handlePrev,
  handleNext,
  isActivePrev = false,
  isActiveNext = true,
}: ModalProps) => (
  <S.Layout>
    {prev && (
      <S.PrevButton onClick={handlePrev} disabled={isActivePrev}>
        {prev}
      </S.PrevButton>
    )}
    <S.ModalText>{center}</S.ModalText>
    {next && (
      <S.NextButton onClick={handleNext} disabled={isActiveNext}>
        {next}
      </S.NextButton>
    )}
  </S.Layout>
);
