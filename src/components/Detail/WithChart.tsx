import React, { useState } from 'react';

// styles
import styled from 'styled-components';
import { size } from '@styles/SharedStyle';

// components
import ContentBox from '@components/Shared/ContentBox';
import NewConfirmed from '@components/Detail/NewConfirmed';
import NewDeaths from '@components/Detail/NewDeaths';

type WithChartPropsType = {
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

const WithChart = ({ data, date }: WithChartPropsType) => {
  const [selected, setSelected] = useState<boolean>(true);

  const onClickConfirmed = (): void => {
    setSelected(true);
  };

  const onClickDeaths = (): void => {
    setSelected(false);
  };

  return (
    <ContentBox height="350px">
      <Tabs>
        <Confirmed
          selected={selected}
          backgroundColor={data.info.country_color.primary}
          onClick={onClickConfirmed}
        >
          확진자
        </Confirmed>
        <Deaths
          selected={selected}
          backgroundColor={data.info.country_color.primary}
          onClick={onClickDeaths}
        >
          사망자
        </Deaths>
      </Tabs>
      {selected ? (
        <NewConfirmed data={data} date={date} />
      ) : (
        <NewDeaths data={data} date={date} />
      )}
    </ContentBox>
  );
};

const Tabs = styled.section`
  width: 100%;

  padding: ${size.base} ${size.base} 0;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

const Confirmed = styled.button<{ selected: boolean; backgroundColor: string }>`
  font-weight: 800;
  padding: 8px;
  border-radius: 4px;
  color: ${(props) => (props.selected ? '#fff' : '#000')};
  background-color: ${(props) =>
    props.selected ? props.backgroundColor : '#fff'};
`;

const Deaths = styled(Confirmed)`
  color: ${(props) => (props.selected ? '#000' : '#fff')};
  background-color: ${(props) =>
    props.selected ? '#fff' : props.backgroundColor};
`;

export default React.memo(WithChart);
