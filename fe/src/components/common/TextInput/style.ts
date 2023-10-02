import styled from 'styled-components';

export const Input = styled.input`
  width: 75%;
  height: 33px;
  ${({ theme }) => theme.font.fontType.subHead};
  border: 1px solid ${({ theme }) => theme.color.colors.neutralBackground};
  border-radius: 18px;
  padding-left: 10px;
  color: ${({ theme }) => theme.color.colors.neutralTextWeak};
`;
