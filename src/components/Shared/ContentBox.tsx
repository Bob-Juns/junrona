import React from 'react';

// styles
import styled from 'styled-components';
import { size, screen } from '@styles/SharedStyle';

type ContentBoxProps = {
  height: string;
  children: React.ReactNode;
};

const ContentBox = ({ height, children }: ContentBoxProps) => {
  return <Container height={height}>{children}</Container>;
};

const Container = styled.article<{ height: string }>`
  width: 100%;
  max-width: ${screen.mobile};
  min-height: ${(props) => props.height};

  background-color: #fff;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export default React.memo(ContentBox);
