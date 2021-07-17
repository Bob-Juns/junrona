import React from 'react';

// styles
import styled from 'styled-components';
import { size, color } from '@styles/SharedStyle';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${size.large};

  background-color: ${color.gray.light};
`;

export default Layout;
