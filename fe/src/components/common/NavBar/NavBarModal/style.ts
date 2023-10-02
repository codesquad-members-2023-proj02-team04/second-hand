import styled from 'styled-components';

import { palette } from '@Styles/color';

interface ButtonProps {
  isActive?: boolean;
}

interface ButtonProps {
  isActive?: boolean;
}

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: 3vh 0 10px 0;
  border-radius: 10px 10px 0px 0px;
  background: ${palette.white};
  ${({ theme }) =>
    theme.mixin.navBarMixin.commonNavBar({ width: 'inherit', height: '60px' })}
  ${({ theme }) => theme.font.fontType.body}
`;
export const ModalText = styled.div`
  display: flex;
  justify-content: center;
`;

export const PrevButton = styled.button<ButtonProps>`
  position: absolute;
  left: 0;
  margin-left: 1vw;
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.colors.neutralTextStrong};

  :disabled {
    color: ${({ theme }) => theme.color.colors.neutralTextWeak};
  }
  cursor: pointer;
`;

export const NextButton = styled.button<ButtonProps>`
  position: absolute;
  right: 0;
  margin-right: 1vw;
  border: none;
  background: none;
  color: ${({ theme }) => theme.color.colors.neutralTextStrong};

  :disabled {
    color: ${({ theme }) => theme.color.colors.neutralTextWeak};
  }
  cursor: pointer;
`;
