import React from 'react';

// styles
import styled from 'styled-components';
import { size, color } from '@styles/SharedStyle';

// components
import HeaderBox from '@components/Shared/HeaderBox';

// assets
import LogoImg from '@assets/logo.svg';

type NavPropsType = {
  updatedAt: string | null;
};

const Nav = ({ updatedAt }: NavPropsType) => {
  return (
    <HeaderBox>
      <Container>
        <Titles>
          <Logo />
          <Title>준로나</Title>
        </Titles>
        <UpdatedAt>
          <Text>Updated at</Text>
          <Time>{updatedAt}</Time>
        </UpdatedAt>
      </Container>
    </HeaderBox>
  );
};

const Container = styled.nav`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: space-between;

  padding: 0 ${size.tiny};
`;

const Titles = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;

const Logo = styled(LogoImg)`
  width: ${size.base};
  height: ${size.base};
`;

const Title = styled.h1`
  color: ${color.red.dark};
  margin-bottom: 2px;

  font-family: 'Noto Sans KR';
  font-size: ${size.tiny};
  font-weight: 800;
`;

const UpdatedAt = styled.section`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Text = styled.h2`
  font-size: ${size.tiny};
`;

const Time = styled.time`
  font-size: calc(${size.tiny} + 2px);
  font-weight: 800;
`;

export default Nav;
