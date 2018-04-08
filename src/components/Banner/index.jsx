import React from 'react'
import { withPrefix } from 'gatsby-link'
import styled from 'styled-components'
import {Container} from '../Shared'

const Banner = styled.section`
  width: 100%;
  min-height: 500px;
  background-image: url(${withPrefix("images/GTMax3D.jpg")});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center -12%;
  background-attachment: fixed;
  background-color: #070707;
  ::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.70);
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const BannerContainer = styled(Container)`
  position: relative;
`

const BannerTextTitle = styled.div`
  font-size: 6.0em;
  font-weight: bold;
`

const BannerText = styled.div`
  font-size: 3.0em;
  width: 60%;
  margin-top: 2.0px;
`

const BannerContainerText = styled.div`
  position: absolute;
  color: #fff;
  z-index: 1;
  top: 0;
  margin: auto;
  bottom: 0;
  width: 100%;
  height: 300px;
`

const Arrow = styled.a`
  display: block;
  position: absolute;
  bottom: 30px;
  z-index: 1;
  width: 40px;
  background-color: #fff;
  margin: auto;
  left: 0;
  right: 0;
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;
`

const Image = styled.img`
  width: 100%;
  position: relative;
  animation: slideDown 0.7s infinite;
  @keyframes slideDown {
    from {
      top: 0;
      opacity: 1;
    }
    to {
      top: 10px;
      opacity: 0;
    }
  }
`

const Component = ({ goTo }) => (
  <Banner data-js="banner-hero">
    <BannerContainerText>
      <BannerContainer>
        <BannerTextTitle>BEM-VINDO A AW3D</BannerTextTitle>
        <BannerText>
          É com muito prazer que a AW3D lhe apresenta o mundo da Impressão 3D e
          pode acreditar, você não vai conseguir viver mais sem ele.
        </BannerText>
      </BannerContainer>
    </BannerContainerText>
    <Arrow onClick={goTo}>
      <Image src={withPrefix("images/icons8-down-arrow-filled-50.png")} />
    </Arrow>
  </Banner>
);

export default Component
