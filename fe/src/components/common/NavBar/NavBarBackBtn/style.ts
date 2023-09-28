import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) =>
    theme.mixin.navBarMixin.commonNavBar({ width: 'inherit', height: '8vh' })};
  padding-bottom: 1.5vh;
`;

export const IconBox = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
`;
