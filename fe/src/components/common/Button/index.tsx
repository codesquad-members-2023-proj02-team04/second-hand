import { MouseEvent } from 'react';

import icons from '@Assets/index';

import { palette } from '@Styles/color';

import * as S from './style';
import { Icon } from '../Icon';

interface ButtonProps extends S.ButtonStyleProps {
  title?: string;
  iconType?: keyof typeof icons;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  iconHandler?: () => void;
}

const Button = ({
  buttonType,
  buttonState,
  size,
  title,
  textAlign = 'center',
  iconType,
  onClick,
  iconHandler,
}: ButtonProps) => (
  <S.Button
    buttonType={buttonType}
    buttonState={buttonState}
    size={size}
    textAlign={textAlign}
    onClick={onClick}
  >
    {title && textAlign === 'left' && <span>{title}</span>}
    {iconType && (
      <Icon
        iconType={iconType}
        width={size === 'S' ? 16 : 20}
        height={size === 'S' ? 16 : 20}
        fill={buttonState === 'default' ? palette.black : palette.white}
        onClick={iconHandler}
      />
    )}
    {title && textAlign === 'center' && <span>{title}</span>}
  </S.Button>
);

export default Button;
