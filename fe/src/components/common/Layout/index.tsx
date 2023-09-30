import React from 'react';
import * as S from './style';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <S.Layout>
    <S.View>{children}</S.View>
  </S.Layout>
);

export default Layout;
