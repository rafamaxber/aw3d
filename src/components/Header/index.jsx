import React from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Btn } from '../Shared';
import LogoComponent from '../Logo';

export const menuLinks = [
  {
    id: 1,
    label: 'Sobre a AW3D',
    link: '/quem-somos',
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
    background-color: #f8d322;
  }
`;

const WrapperNavigation = styled(Container)`
  align-items: center;
  display: flex;
  position: relative;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0 0 0 0;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  width: 75%;
  &.active {
    display: block !important;
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
  font-weight: 400;
  font-size: 1.8em;
  transition: 0.2s ease;
  :hover {
    color: #545454;
  }
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const LinkComum = MenuLinkItem.withComponent('a');
const LinkStoreMobile = styled(LinkComum)`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburguerMenuBar = styled.div`
  background-color: #fff;
  height: 3px;
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
  padding: 0 20px;
  @media (max-width: 768px) {
    display: block;
  }
  &.active > div {
    background-color: #f8d322;
  }
`;

const HeaderBtn = styled(Btn)`
  margin: 0 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Component = ({ isHomepage, storeUrl }) => {
  const $nav = () => document.querySelector('[data-js="nav"]');
  const $hamburguerMenu = () => document.querySelector('[data-js="hamburguerMenu"]');
  const showMobileMenu = () => {
    $hamburguerMenu().classList.toggle('active');
    $nav().classList.toggle('active');
  };
  const clearMenu = () => $nav().classList.remove('active');

  return (
    <Header data-js="header">
      <WrapperNavigation>
        <LogoComponent showH1={isHomepage} />
        <HamburguerMenu data-js="hamburguerMenu" onClick={showMobileMenu}>
          <HamburguerMenuBar />
          <HamburguerMenuBar />
          <HamburguerMenuBar />
        </HamburguerMenu>
        <Nav data-js="nav">
          <Menu>
            <MenuItem>
              <LinkStoreMobile onClick={clearMenu} href={storeUrl}>
                Loja
              </LinkStoreMobile>
            </MenuItem>
            {menuLinks.map(item => (
              <MenuItem key={item.id}>
                <MenuLinkItem onClick={clearMenu} to={item.link} activeStyle={{ color: '#000' }}>
                  {item.label}
                </MenuLinkItem>
              </MenuItem>
            ))}
          </Menu>
        </Nav>
        <HeaderBtn href={storeUrl}>Loja</HeaderBtn>
      </WrapperNavigation>
    </Header>
  );
};

Component.propTypes = {
  isHomepage: PropTypes.bool.isRequired,
  storeUrl: PropTypes.string.isRequired,
};

export default Component;
