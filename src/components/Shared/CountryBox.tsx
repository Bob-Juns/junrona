import React from 'react';

// styles
import styled from 'styled-components';
import { size, screen } from '@styles/SharedStyle';

type CountryBoxPropsType = {
  onClick?: () => void;
  color: string;
  countryFlag: any;
  countryName: string;
  bottomShadow: boolean;
  children: React.ReactNode;
};

const CountryBox = ({
  onClick,
  color,
  countryFlag,
  countryName,
  bottomShadow,
  children,
}: CountryBoxPropsType) => {
  return (
    <Container bottomShadow={bottomShadow} onClick={onClick}>
      <Rect backgroundColor={color} />
      {countryFlag}
      <Name color={color}>{countryName}</Name>
      {children}
    </Container>
  );
};

const Container = styled.div<{ bottomShadow: boolean }>`
  width: 100%;
  max-width: ${screen.mobile};
  height: ${size.header.small};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  background-color: #fff;

  box-shadow: ${(props) =>
    props.bottomShadow ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};

  z-index: 2;
`;

const Rect = styled.div<{ backgroundColor: string }>`
  width: 8px;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
`;

const Name = styled.h2<{ color: string }>`
  color: ${(props) => props.color};
  font-size: ${size.medium};
  font-weight: 800;
  text-transform: Capitalize;
`;

export default React.memo(CountryBox);
