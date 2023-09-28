import { colors, palette } from './color';
import { fontType } from './font';

export const navBarMixin = {
  commonNavBar: ({
    font = fontType.headLine,
    height = '8vh',
    width = 'inherit',
    background = colors.neutralBackgroundBlur,
    alignItems = 'flex-end',
  }) => `
  position: fixed;
  width: ${width};
  backdrop-filter: blur(4px);
  display: flex;
  align-items: ${alignItems};
  backdrop-filter: blur(4px);
  z-index: 1;
  border-bottom: 1px solid  ${colors.neutralBorder};
  height :${height};
  background: ${background};
  font: ${font};
  `,
  pickerNavBar: ({
    background = palette.white,
    border = `0.5px solid ${palette.gray50}`,
    firstBoxShadow = `2px 3px 3px ${palette.gray300}`,
    secondBoxShadow = `1px 2px 4px ${palette.gray400}`,
  }) =>
    `
  background: ${background};
  border: ${border};
  box-shadow: ${firstBoxShadow},${secondBoxShadow};
`,
};
