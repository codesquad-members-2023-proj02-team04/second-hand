import styled from 'styled-components';
import { theme } from '@Styles/theme';

export const AddLocationButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: inherit;
`;

export const LocationBox = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.font.fontType.subHead};
`;
