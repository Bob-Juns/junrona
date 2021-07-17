import React from 'react';

// styles
import styled from 'styled-components';
import { size, color as colour } from '@styles/SharedStyle';

import Chevron from '@assets/chevron.svg';

type BadgePropsType = {
  backgroundColor?: boolean;
  comparison?: string | null;
  comparisonSign?: number | null;
};

const Badge = ({
  backgroundColor,
  comparison,
  comparisonSign,
}: BadgePropsType) => {
  return (
    <Container backgroundColor={backgroundColor ? colour.gray.light : '#fff'}>
      <Comparison
        color={
          comparisonSign === 1
            ? colour.green
            : comparisonSign === -1
            ? colour.red.dark
            : '#000'
        }
      >
        {comparison}
      </Comparison>
      {comparisonSign === 1 ? (
        <Up color={colour.green} />
      ) : comparisonSign === -1 ? (
        <Down color={colour.red.dark} />
      ) : null}
    </Container>
  );
};

const Container = styled.div<{ backgroundColor: string }>`
  width: 70px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  background-color: ${(props) => props.backgroundColor};

  font-size: ${size.tiny};
  font-weight: 800;

  border-radius: 6px;
`;

const Comparison = styled.mark<{ color: string }>`
  color: ${(props) => props.color};
  font-size: ${size.tiny};
  font-weight: 800;
`;

const Up = styled(Chevron)<{ color: string }>`
  width: 10px;
  color: ${(props) => props.color};
`;
const Down = styled(Up)`
  transform: rotate(180deg);
`;

export default Badge;
