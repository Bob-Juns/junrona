import React from 'react';

// styles
import styled from 'styled-components';
import { size, screen } from '@styles/SharedStyle';

// components
import Country from '@components/Home/Country';

type DailyPropsType = {
  data: dataType[];
};

const Daily = ({ data }: DailyPropsType) => {
  return (
    <Container>
      {data?.map((item: dataType) => (
        <Country
          key={item.id}
          id={item.id}
          color={item.info.country_color.primary}
          countryName={item.info.country_name}
          countryFlag={item.info.country_flag}
          yesterdayNew={item.new.confirmed.yesterday}
          twoDaysAgoNew={item.new.confirmed.two_days_ago}
          accNew={item.acc.new.yesterday}
          comparisonYesterdayNewCalc={
            item.comparison.new.confirmed.calc.yesterday
          }
          comparisonYesterdayNewSign={
            item.comparison.new.confirmed.sign.yesterday
          }
          comparisonTwoDaysAgoNewCalc={
            item.comparison.new.confirmed.calc.two_days_ago
          }
          comparisonTwoDaysAgoNewSign={
            item.comparison.new.confirmed.sign.two_days_ago
          }
        />
      ))}
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: ${screen.mobile};
  min-height: 200px;

  margin-bottom: ${size.large};

  display: flex;
  flex-direction: column;
  gap: ${size.base};
`;

export default Daily;
