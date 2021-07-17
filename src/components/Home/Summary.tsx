import React from 'react';

// components
import ContentBox from '@components/Shared/ContentBox';

// styles
import styled from 'styled-components';
import { size, color, screen } from '@styles/SharedStyle';

// util
import getDate from '@util/getDate';

// assets
import RefreshIcon from '@assets/refresh.svg';

type SummaryPropsType = {
  data: dataType[];
  onClick: () => void;
};

const Summary = ({ data, onClick }: SummaryPropsType) => {
  return (
    <Container>
      <Header>
        <Title>
          <Date>{getDate(-1)}</Date>
          <Text>국가별 일일 확진자 수</Text>
        </Title>
        <Refresh onClick={onClick} />
      </Header>
      <ContentBox height="110px">
        <Wrapper>
          {data.map((item: dataType) => (
            <Content key={item.id}>
              <CountryName color={item.info.country_color.primary}>
                {item.info.kor_name}
              </CountryName>
              <NewConfirmed>{item.new.confirmed.yesterday}</NewConfirmed>
            </Content>
          ))}
        </Wrapper>
      </ContentBox>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: ${screen.mobile};

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Header = styled.div`
  width: 100%;

  padding: 0 5px;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  gap: 6px;

  font-family: 'Noto Sans KR';
  font-size: ${size.tiny};
`;

const Date = styled.time``;

const Text = styled.p``;

const Refresh = styled(RefreshIcon)`
  width: ${size.tiny};
  height: ${size.tiny};

  color: ${color.gray.dark};

  cursor: pointer;
`;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  padding: ${size.large} 0;

  display: flex;
  justify-content: space-between;
`;

const Content = styled.article`
  width: calc(100% / 3);

  border-right: 1px solid #000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  &:last-child {
    border-right: none;
  }
`;

const CountryName = styled.h2<{ color: any }>`
  color: ${(props) => props.color};
  font-size: ${size.tiny};
  font-weight: 800;
`;
const NewConfirmed = styled.p`
  font-size: ${size.small};
  font-weight: 800;
  &:after {
    content: ' 명';
    font-size: ${size.tiny};
  }
`;

export default Summary;
