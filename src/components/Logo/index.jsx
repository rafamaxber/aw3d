import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import logo from '../../img/logo_aw3d_bg.svg';

const styleLogo = `
  width: 130px;
  margin: 0 0 0 0;
  background-color: #f8d322;
  height: 70px;
  padding: 0 0 0 0;
  display: flex;
  align-items: center;
  a {
    display: block;
  }
  @media (max-width: 768px) {
   height: 49px;
  }
`;

const Logo = styled.div`
  ${styleLogo} 
  @media (max-width: 768px) {
    width: 110px;
  }
`;

const LogoH1 = styled.h1`
  ${styleLogo};
`;

const LogoImage = styled.img`
  display: block;
  margin: auto;
  width: 80%;
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
