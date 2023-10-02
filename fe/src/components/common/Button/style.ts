import styled, { css } from 'styled-components';

export interface ButtonStyleProps {
  buttonType: 'rectangle' | 'circle' | 'ellipse';
  buttonState: 'default' | 'active';
  size?: 'S' | 'M' | 'L';
  textAlign?: 'left' | 'center';
}

export const Button = styled.button<ButtonStyleProps>`
  ${({ theme, buttonType, size }) => {
    if (buttonType === 'rectangle') {
      if (size === 'S') {
        return css`
          width: fit-content;
          border: 1px solid ${({ theme }) => theme.color.colors.neutralOverlay};
          border-radius: 8px;
          height: 40px;
          padding: 8px 16px;
          ${theme.font.fontType.caption1};
        `;
      }
      if (size === 'M') {
        return css`
          width: 177.5px;
          border: 1px solid ${({ theme }) => theme.color.colors.neutralOverlay};
          border-radius: 8px;
          height: 55px;
          padding: 8px 16px;
          ${theme.font.fontType.callOut};
        `;
      }
      if (size === 'L') {
        return css`
          width: 90%;
          border: none;
          border-radius: 8px;
          height: 65px;
          padding: 8px 16px;
          ${theme.font.fontType.subHead};
        `;
      }
    }
    if (buttonType === 'circle') {
      if (size === 'S') {
        return css`
          width: 20px;
          height: 20px;
          border-radius: 50px;
          ${theme.font.fontType.caption1};
        `;
      }
      if (size === 'M') {
        return css`
          width: 35px;
          height: 35px;
          border-radius: 50px;
        `;
      }
      if (size === 'L') {
        return css`
          width: 56px;
          height: 56px;
          ${theme.font.fontType.headLine};
          border-radius: 50px;
        `;
      }
    }
    if (buttonType === 'ellipse') {
      if (size === 'S') {
        return css`
          width: fit-content;
          border: none;
          border-radius: 50px;
          height: 3.5vh;
          ${theme.font.fontType.caption1};
        `;
      }
      if (size === 'M') {
        return css`
          text-align: initial;
          word-wrap: break-word;
          overflow-wrap: break-word;
          display: flex;
          align-items: flex-start;
          min-height: 4vh;
          width: fit-content;
          border: none;
          border-radius: 18px;
          max-width: 70vw;
          ${theme.font.fontType.callOut};
        `;
      }
      if (size === 'L') {
        return css`
          width: fit-content;
          border: 1px solid ${({ theme }) => theme.color.colors.neutralOverlay};
          height: 4.25vh;
          ${theme.font.fontType.callout};
        `;
      }
    }
  }};

  ${({ theme, buttonState }) =>
    buttonState === 'default'
      ? css`
          color: ${theme.color.colors.accentTextWeak};
          background-color: ${theme.color.colors.systemBackgroundWeak};
        `
      : css`
          color: ${theme.color.colors.accentText};
          background-color: ${theme.color.colors.accentBackgroundPrimary};
        `};

  display: flex;
  align-items: center;
  gap: 3px;
  ${({ textAlign }) => css`
    justify-content: ${textAlign === 'center' ? 'center' : 'space-between'};
    ${textAlign === 'center' && `gap: 4px`};
  `}
  ${({ buttonType }) => css`
    ${buttonType === 'circle' && 'border: none'};
    padding: ${buttonType !== 'circle' && '8px 10px'};
  `};
  cursor: pointer;
`;
