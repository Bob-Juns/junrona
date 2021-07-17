import React, { useState, useEffect } from 'react';

// styles
import styled from 'styled-components';
import { color, size } from '@styles/SharedStyle';

// components
import Badge from '@components/Shared/Badge';

// libraries
import { Bar } from 'react-chartjs-2';

type NewConfirmedPropsType = {
  data: dataType;
  date: {
    yesterday: string;
    twoDaysAgo: string;
    threeDaysAgo: string;
    fourDaysAgo: string;
    fiveDaysAgo: string;
    sixDaysAgo: string;
    sevenDaysAgo: string;
  };
};

type chartDataType = {
  data: {
    labels: string[];
    datasets: {}[];
  };
  options: {};
};

const NewDeaths = ({ data, date }: NewConfirmedPropsType) => {
  const [chartData, setChartData] = useState<chartDataType>({
    data: {
      labels: [
        date.sevenDaysAgo.slice(-5),
        date.sixDaysAgo.slice(-5),
        date.fiveDaysAgo.slice(-5),
        date.fourDaysAgo.slice(-5),
        date.threeDaysAgo.slice(-5),
        date.twoDaysAgo.slice(-5),
        date.yesterday.slice(-5),
      ],
      datasets: [
        {
          type: 'bar',
          label: '',
          data: [
            data.new.deaths?.seven_days_ago,
            data.new.deaths?.six_days_ago,
            data.new.deaths?.five_days_ago,
            data.new.deaths?.four_days_ago,
            data.new.deaths?.three_days_ago,
            data.new.deaths?.two_days_ago,
            data.new.deaths?.yesterday,
          ],
          fill: false,
          backgroundColor: data.info.country_color.primary,
          borderColor: data.info.country_color.primary,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  return (
    <Container>
      <Daily>
        <Yesterday backgroundColor={data.info.country_color.primary}>
          <Title>어제 사망자</Title>
          <Confirmed>{data.new.deaths?.yesterday.toLocaleString()}</Confirmed>
          <Badge
            comparison={data.comparison.new.deaths?.calc.yesterday}
            comparisonSign={data.comparison.new.deaths?.sign.yesterday}
          />
        </Yesterday>
        <OtherDays>
          <Content
            date={date.twoDaysAgo}
            result={data.new.deaths?.two_days_ago}
            comparison={data.comparison.new.deaths?.calc.two_days_ago}
            comparisonSign={data.comparison.new.deaths?.sign.two_days_ago}
          />
          <Content
            date={date.threeDaysAgo}
            result={data.new.deaths?.three_days_ago}
            comparison={data.comparison.new.deaths?.calc.three_days_ago}
            comparisonSign={data.comparison.new.deaths?.sign.three_days_ago}
          />
          <Content
            date={date.fourDaysAgo}
            result={data.new.deaths?.four_days_ago}
            comparison={data.comparison.new.deaths?.calc.four_days_ago}
            comparisonSign={data.comparison.new.deaths?.sign.four_days_ago}
          />
        </OtherDays>
      </Daily>
      <Chart>
        <Bar
          type="bar"
          data={chartData.data}
          options={chartData.options}
          height={220}
        />
      </Chart>
    </Container>
  );
};

type ContentPropsType = {
  date: string;
  result?: string;
  comparison: any;
  comparisonSign: any;
};

const Content = ({
  date,
  result,
  comparison,
  comparisonSign,
}: ContentPropsType) => {
  return (
    <Wrapper>
      <Date>{date}</Date>
      <Result>{result?.toLocaleString()}</Result>
      <Badge comparison={comparison} comparisonSign={comparisonSign} />
    </Wrapper>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Daily = styled.section`
  width: 100%;
  height: 150px;

  padding: ${size.base};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Yesterday = styled.article<{ backgroundColor: string }>`
  width: 33%;
  height: 100%;

  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Title = styled.h3`
  color: #fff;
  font-size: ${size.tiny};
  font-weight: 800;
`;

const Confirmed = styled.p`
  color: #fff;
  font-size: ${size.medium};
  font-weight: 800;

  &:after {
    content: ' 명';
    font-size: ${size.tiny};
  }
`;

const OtherDays = styled.section`
  width: 65%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Chart = styled.section`
  width: 100%;
  padding: ${size.base};
`;

const Wrapper = styled.article`
  width: 100%;
  padding: 7px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${color.gray.light};
  border-radius: 6px;
`;

const Date = styled.time`
  font-size: ${size.tiny};
  text-align: left;
`;

const Result = styled.p`
  font-size: ${size.tiny};
  font-weight: 800;
  text-align: right;

  &:after {
    content: ' 명';
    font-size: 8px;
  }
`;

export default NewDeaths;
