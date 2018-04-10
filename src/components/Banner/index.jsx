import React from 'react';
import styled from 'styled-components';
import { Container } from '../Shared';

import gtMax3d from '../../img/GTMax3D.jpg';

const Banner = styled.section`
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-image: url(${gtMax3d});
  position: relative;
  background-attachment: fixed;
  background-color: #070707;
  background-position: 0 -20%;
  background-size: 100%;
`;

const BannerContainer = styled(Container)`
  position: relative;
`;

const BannerContainerText = styled.div`
  position: absolute;
  color: #fff;
  z-index: 1;
  top: 0;
  margin: auto;
  bottom: 0;
  width: 100%;
  height: 300px;
`;

const Component = () => (
  <Banner>
    <BannerContainerText>
      <BannerContainer />
    </BannerContainerText>
  </Banner>
);

export default Component;
