import React, { useState, useEffect, useRef } from 'react';

// styles
import styled from 'styled-components';
import { size } from '@styles/SharedStyle';

// components
import CountryBox from '@components/Shared/CountryBox';
import Menu from '@components/Detail/Menu';

// assets
import MenuImg from '@assets/menu.svg';
import CloseIcon from '@assets/close.svg';

type HeaderPropsType = {
  color: string;
  countryFlag: any;
  countryName: string;
};

const Header = ({ color, countryFlag, countryName }: HeaderPropsType) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const focusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isMenuOpen && (document.body.style.overflow = 'hidden');
    !isMenuOpen && (document.body.style.overflow = 'auto');
  }, [isMenuOpen]);

  const onClickOutside = (event: any): void => {
    if (focusRef.current && !focusRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutside, true);
    return () => {
      document.removeEventListener('click', onClickOutside, true);
    };
  }, [focusRef]);

  const onClickMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <CountryBox
        bottomShadow={true}
        color={color}
        countryFlag={countryFlag}
        countryName={countryName}
      >
        <MenuIcons ref={focusRef} onClick={onClickMenu}>
          {isMenuOpen ? <Close color={color} /> : <Hamburger color={color} />}
        </MenuIcons>
        {isMenuOpen && <Menu backgroundColor={color} />}
      </CountryBox>
    </>
  );
};

const MenuIcons = styled.div`
  width: ${size.base};
  margin-left: auto;
  margin-right: 8px;
  cursor: pointer;
`;

const Hamburger = styled(MenuImg)<{ color: string }>`
  width: ${size.base};
  margin-left: auto;
  margin-right: 8px;
  color: ${(props) => props.color};
`;

const Close = styled(CloseIcon)<{ color: string }>`
  width: ${size.base};
  margin-left: auto;
  margin-right: 8px;
  color: ${(props) => props.color};
`;

export default React.memo(Header);
