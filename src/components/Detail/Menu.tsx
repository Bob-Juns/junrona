import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { size, color, screen } from '@styles/SharedStyle';

const Menu = ({ backgroundColor }: { backgroundColor: string }) => {
  return (
    <List>
      <Link to="/">
        <Item backgroundColor={backgroundColor}>home</Item>
      </Link>
      <Link to="/vietnam">
        <Item backgroundColor={backgroundColor}>vietnam</Item>
      </Link>
      <Link to="/indonesia">
        <Item backgroundColor={backgroundColor}>indonesia</Item>
      </Link>
      <Link to="/united-state">
        <Item backgroundColor={backgroundColor}>united state</Item>
      </Link>
    </List>
  );
};

const List = styled.ul`
  width: 100%;
  max-width: ${screen.mobile};
  margin-top: ${size.header.small};

  background-color: #fff;
  border-top: 1px solid ${color.gray.light};

  display: flex;
  flex-direction: column;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 0;
`;

const Item = styled.li<{ backgroundColor: string }>`
  width: 100%;
  padding: ${size.tiny};

  border-bottom: 1px solid ${color.gray.light};

  font-size: ${size.base};
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;

  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.backgroundColor};
  }
`;

export default Menu;
