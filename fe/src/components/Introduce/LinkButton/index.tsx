import { Icon } from '@Components/common/Icon';
import React from 'react';
import icons from '@Assets/index';
import { palette } from '@Styles/color';
import * as S from './style';

interface LinkButtonProps {
  iconType: keyof typeof icons;
  iconHandler: () => void;
  text: string;
}

const LinkButton = ({ iconType, iconHandler, text }: LinkButtonProps) => (
  <S.LinkButton onClick={iconHandler}>
    <Icon iconType={iconType} width={25} height={25} fill={palette.black} />
    <S.InnerText>{text}</S.InnerText>
    <Icon iconType="chevronRight" width={10} height={10} fill={palette.black} />
  </S.LinkButton>
);

export default LinkButton;
