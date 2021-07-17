import React from 'react';
import { Link } from 'react-router-dom';

// styles
import styled from 'styled-components';
import { size } from '@styles/SharedStyle';

// components
import CountryBox from '@components/Shared/CountryBox';

// assets
import HomeImg from '@assets/home.svg';

type HeaderPropsType = {
  color: string;
  countryFlag: any;
  countryName: string;
};

const Header = ({ color, countryFlag, countryName }: HeaderPropsType) => {
  return (
    <>
      <CountryBox
        bottomShadow={true}
        color={color}
        countryFlag={countryFlag}
        countryName={countryName}
      >
        <HomeLink to={'/'}>
          <Home color={color} />
        </HomeLink>
      </CountryBox>
    </>
  );
};

const HomeLink = styled(Link)`
  width: ${size.base};
  margin-left: auto;
  margin-right: 8px;
`;

const Home = styled(HomeImg)<{ color: string }>`
  width: 100%;
  color: ${(props) => props.color};
`;

export default Header;
