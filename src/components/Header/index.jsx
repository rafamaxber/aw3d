import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container } from '../Shared';
import LogoComponent from '../Logo';

const menuLinks = [
  {
    id: 1,
    label: 'Sobre a AW3D',
    link: '/sobre',
  },
  {
    id: 2,
    label: 'Portfólio',
    link: '/portfolio',
  },
  {
    id: 3,
    label: 'Clientes',
    link: '/clientes',
  },
  {
    id: 4,
    label: 'Blog',
    link: '/blog',
  },
  {
    id: 5,
    label: 'Contato',
    link: '/contato',
  },
];

const Header = styled.header`
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 1;
  height: 70px;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 50px;
  }
`;

const WrapperNavigation = styled(Container)`
  align-items: center;
  display: flex;
  position: relative;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  width: 75%;
  &.active {
    display: block!important;
  }
  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    text-align: center;
    background-color: #fff;
    height: 100%;
    display: none;
  }
`;

const Menu = styled.ul`
  padding: 20px;
  margin: 0 0 0 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 480px;
  float: right;
  @media (max-width: 768px) {
    max-width: 100%;
    display: block;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const MenuLinkItem = styled(Link)`
  text-decoration: none;
  color: #9e9f9e;
  font-weight: 300;
  font-size: 1.8em;
  transition: 0.2s ease;
  :hover {
    color: #545454;
  }
`;

const HamburguerMenuBar = styled.div`
  background-color: #f8d322;
  height: 2px;
  width: 25px;
  border-radius: 5px;
  margin-bottom: 6.5px;
  :last-child {
    margin-bottom: 0px;
  }
`;

const HamburguerMenu = styled.div`
  display: none;
  z-index: 2;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Btn = styled.a`
  background: #f8d322;
  border: none;
  border-radius: 4px;
  color: #000;
  display: inline-block;
  white-space: nowrap;
  padding: 8px 18px;
  text-decoration: none;
  position: relative;
  border-bottom: none;
  font-size: 1.6em;
  margin: 0 5px;
`;

const Component = ({ isHomepage }) => {
  const $nav = document.querySelector('[data-js="nav"]');

  const showMobileMenu = () => {
    $nav.classList.toggle('active');
  };

  const clearMenu = () => {
    $nav.classList.remove('active');
  };

  return (
    <Header data-js="header">
      <WrapperNavigation>
        <HamburguerMenu onClick={showMobileMenu}>
          <HamburguerMenuBar />
          <HamburguerMenuBar />
          <HamburguerMenuBar />
        </HamburguerMenu>
        <LogoComponent showH1={isHomepage} />
        <Nav data-js="nav">
          <Menu>
            {menuLinks.map(item => (
              <MenuItem key={item.id}>
                <MenuLinkItem onClick={clearMenu} to={item.link}>{item.label}</MenuLinkItem>
              </MenuItem>
            ))}
          </Menu>
        </Nav>
        <Btn href="https://www.aw3dshop.com.br/?utm_source=site_institucional">Loja</Btn>
      </WrapperNavigation>
    </Header>
  );
};

Component.propTypes = {
  isHomepage: PropTypes.bool.isRequired,
};

export default Component;
