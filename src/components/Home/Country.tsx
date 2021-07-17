import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import styled from 'styled-components';
import { size, color as colour, screen } from '@styles/SharedStyle';

// components
import CountryBox from '@components/Shared/CountryBox';
import Badge from '@components/Shared/Badge';

// util
import getDate from '@util/getDate';

//assets
import PlusIcon from '@assets/plus.svg';
import MinusIcon from '@assets/minus.svg';

type CountryProps = {
  color: string;
  id: string | undefined;
  countryName: string;
  countryFlag: any;
  yesterdayNew: string | null;
  twoDaysAgoNew: string | null;
  accNew: string | null;
  comparisonYesterdayNewCalc: string | null;
  comparisonYesterdayNewSign: number | null;
  comparisonTwoDaysAgoNewCalc: string | null;
  comparisonTwoDaysAgoNewSign: number | null;
};

const Country = ({
  color,
  id,
  countryName,
  countryFlag,
  yesterdayNew,
  twoDaysAgoNew,
  accNew,
  comparisonYesterdayNewCalc,
  comparisonYesterdayNewSign,
  comparisonTwoDaysAgoNewCalc,
  comparisonTwoDaysAgoNewSign,
}: CountryProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const onClickToggle = (): void => {
    setIsToggled((prev) => !prev);
  };

  return (
    <>
      <Container>
        <CountryBox
          color={color}
          countryFlag={countryFlag}
          countryName={countryName}
          onClick={onClickToggle}
          bottomShadow={isToggled}
        >
          {isToggled ? <Minus color={color} /> : <Plus color={color} />}
        </CountryBox>
        {isToggled && (
          <Contents>
            <Content>
              <Date color={color}>{getDate(-1)}</Date>
              <NewConfirmed color={color}>{yesterdayNew}</NewConfirmed>
              <Badge
                backgroundColor={true}
                comparison={comparisonYesterdayNewCalc}
                comparisonSign={comparisonYesterdayNewSign}
              />
            </Content>
            <Content>
              <Date color="#000">{getDate(-2)}</Date>
              <NewConfirmed color="#000">{twoDaysAgoNew}</NewConfirmed>
              <Badge
                backgroundColor={true}
                comparison={comparisonTwoDaysAgoNewCalc}
                comparisonSign={comparisonTwoDaysAgoNewSign}
              />
            </Content>
            <Content>
              <Date color="#000">누적</Date>
              <NewConfirmed color="#000">{accNew}</NewConfirmed>
              <Link to={`/${id}`}>
                <GoDetail backgroundColor={color}>자세히 보기</GoDetail>
              </Link>
            </Content>
          </Contents>
        )}
      </Container>
    </>
  );
};

const Container = styled.article`
  width: 100%;
  max-width: ${screen.mobile};
  min-height: ${size.header.small};

  display: flex;
  flex-direction: column;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Plus = styled(PlusIcon)<{ color: string }>`
  width: ${size.base};
  margin-left: auto;
  margin-right: 8px;
  color: ${(props) => props.color};
  cursor: pointer;
  z-index: 3;
`;

const Minus = styled(MinusIcon)<{ color: string }>`
  width: ${size.base};
  margin-left: auto;
  margin-right: 8px;
  color: ${(props) => props.color};
  cursor: pointer;
  z-index: 3;
`;

const Contents = styled.section`
  width: 100%;
  height: 120px;
  background-color: #fff;

  padding: ${size.medium} 0;

  display: flex;
  justify-content: space-between;
`;

const Content = styled.section`
  width: calc(100% / 3);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Date = styled.time<{ color: string }>`
  font-size: ${size.tiny};
  color: ${(props) => props.color};
`;

const NewConfirmed = styled.mark<{ color: string }>`
  font-size: ${size.small};
  font-weight: 800;
  color: ${(props) => props.color};

  &:after {
    content: ' 명';
    font-size: ${size.tiny};
  }
`;

const GoDetail = styled.div<{ backgroundColor: string }>`
  width: 70px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  color: #fff;
  background-color: ${(props) => props.backgroundColor};

  font-size: 10px;
  font-weight: 800;

  border-radius: 6px;

  cursor: pointer;
`;

export default React.memo(Country);
