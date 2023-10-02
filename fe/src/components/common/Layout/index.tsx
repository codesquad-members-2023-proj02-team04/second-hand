import React from 'react';
import Introduce from '@Components/Introduce';
import * as S from './style';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <S.Layout>
    <S.DesktopView>
      <Introduce />
    </S.DesktopView>
    <S.MobileView>{children}</S.MobileView>
  </S.Layout>
);

export default Layout;
