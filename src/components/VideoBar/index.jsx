import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from '../Shared';

const Wrapper = styled.div`
  clear: both;
  min-height: 315px;
  background-color: #363636;
  @media (min-width: 760px) {
    margin: 50px 0;
  }
`;

const ContainerVideoBar = styled(Container)`
  display: flex;
  padding: 0 0 0 0;
  justify-content: space-between;
  @media (max-width: 880px) {
    display: block;
  }
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 880px) {
    margin: auto;
    width: 100%;
    max-width: 300px;
    padding: 60px 0 30px;
  }
`;

const Text = styled.div`
  font-size: 2em;
  color: #fff;
  width: 330px;
  height: 100px;
  font-weight: lighter;
  text-align: center;
  a {
    font-weight: normal;
    display: block;
    color: inherit;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Iframe = styled.iframe`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  width: 45%;
  display: block;
  @media (max-width: 880px) {
    margin: auto;
    width: 100%;
    max-width: 560px;
  }
`;

const VideoBar = () => (
  <Wrapper>
    <ContainerVideoBar>
      <WrapperText>
        <Text>
          A AW3D é revendedora autorizada
          GTMax3D em São Paulo.
          <a href="#tt">Visite nosso showroom!</a>
        </Text>
      </WrapperText>
      <Iframe
        title="aw3d video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SHcETXwGLK0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </ContainerVideoBar>
  </Wrapper>
);

VideoBar.defaultProps = {
  content: '',
  className: '',
};

VideoBar.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

export default VideoBar;
