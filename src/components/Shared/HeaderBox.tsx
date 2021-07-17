import React from 'react';

// styles
import styled from 'styled-components';
import { size, screen } from '@styles/SharedStyle';

type HeaderBoxProps = {
  children: React.ReactNode;
};

const HeaderBox = ({ children }: HeaderBoxProps) => {
  return <Container>{children}</Container>;
};

const Container = styled.header`
  width: 100%;
  max-width: ${screen.mobile};
  height: ${size.header.small};

  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default HeaderBox;
