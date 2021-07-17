import React from 'react';

// styles
import styled from 'styled-components';
import { size } from '@styles/SharedStyle';

// components
import ContentBox from '@components/Shared/ContentBox';
import Badge from '@components/Shared/Badge';

type AccPropsType = {
  data: dataType;
};

const Accumulation = ({ data }: AccPropsType) => {
  return (
    <ContentBox height="110px">
      <Container>
        <Content>
          <Title color={data.info.country_color.primary}>누적 확진자</Title>
          <Result color={data.info.country_color.primary}>
            {data.acc.new.yesterday}
          </Result>
          <Badge
            backgroundColor={true}
            comparison={data.comparison.acc?.new.calc}
            comparisonSign={data.comparison.acc?.new.sign}
          />
        </Content>
        <Content>
          <Title color="#000">누적 사망자</Title>
          <Result color="#000">{data.acc.deaths?.yesterday}</Result>
          <Badge
            backgroundColor={true}
            comparison={data.comparison.acc?.deaths.calc}
            comparisonSign={data.comparison.acc?.deaths.sign}
          />
        </Content>
      </Container>
    </ContentBox>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;

  padding: ${size.large} 0;

  display: flex;
  justify-content: space-between;
`;

const Content = styled.article`
  width: calc(100% / 2);

  display: flex;
  flex-direction: column;
  justify-content: centner;
  align-items: center;
  gap: 6px;

  &:first-child {
    border-right: 1px solid #000;
  }
`;

const Title = styled.h2<{ color: string }>`
  color: ${(props) => props.color};
  font-size: ${size.tiny};
`;

const Result = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  font-size: ${size.medium};
  font-weight: 800;
  &:after {
    content: ' 명';
    font-size: ${size.tiny};
  }
`;

export default Accumulation;
