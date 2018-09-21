import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import logo from '../../img/logo-revenda.svg';

const styleLogo = `
  width: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  display: flex;
  align-items: center;
  a {
    display: block;
    width: 62%;
    min-width: 200px;
    height: 70px;
  }
  @media (max-width: 1200px) {
    width: 70%;
    a {
      width: 100%;
    }
  }
  @media (max-width: 930px) {
    width: 60%;
  }
  @media (max-width: 870px) {
    width: 50%;
  }
  @media (max-width: 815px) {
    width: 80%;
    a {
      height: auto;
      max-width: 262px;
    }
  }
`;

const Logo = styled.div`
  ${styleLogo} @media (max-width: 768px) {
    width: 110px;
  }
`;

const LogoH1 = styled.h1`
  ${styleLogo};
`;

const LogoImage = styled.img`
  display: block;
  margin: auto;
  width: 100%;
  max-height: 70px;
  @media (max-width: 815px) {
    width: 280px;
    height: 50px;
  }
  @media (max-width: 335px) {
    width: 100%;
    height: 45px;
  }
`;

const LogoLink = () => (
  <Link href="/" to="/">
    <LogoImage
      src={logo}
      title="AW3D - A sua loja de impressão 3D"
      alt="AW3D - A sua loja de impressão 3D"
    />
  </Link>
);

const LogoComponent = (showH1) => {
  if (showH1.showH1) {
    return (
      <LogoH1>
        <LogoLink />
      </LogoH1>
    );
  }

  return (
    <Logo>
      <LogoLink />
    </Logo>
  );
};

export default LogoComponent;
