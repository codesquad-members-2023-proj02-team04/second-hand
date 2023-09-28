import React from 'react';
import * as S from './style';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <S.Layout>
    <S.MobileView>{children}</S.MobileView>
  </S.Layout>
);

export default Layout;
