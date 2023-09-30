import styled, { css, keyframes } from 'styled-components';

export type SpinnerProps = {
  isDynamic: boolean;
};

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div<SpinnerProps>`
  display: flex;
  box-sizing: border-box;
  width: 33px;
  height: 33px;
  border: 3px solid ${({ theme }) => theme.color.colors.accentBackgroundPrimary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
  position: absolute;
  ${({ isDynamic }) =>
    isDynamic
      ? css`
          top: 15%;
          left: 15%;
        `
      : css`
          top: 50%;
          right: calc(50vw - 196.5px);
        `}
`;
