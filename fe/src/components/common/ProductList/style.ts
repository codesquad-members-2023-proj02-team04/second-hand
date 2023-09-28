import styled from 'styled-components';

export const Layout = styled.ul`
  & hr {
    background: ${({ theme }) => theme.color.palette.gray500};
    height: 1px;
    border: 0;
  }
`;
