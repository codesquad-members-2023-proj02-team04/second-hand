import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.mixin.navBarMixin.commonNavBar({ height: '60px' })}
  padding-bottom: 10px;
`;
