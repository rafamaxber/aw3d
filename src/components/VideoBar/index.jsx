import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from '../Shared';

const Wrapper = styled.div`
  clear: both;
  height: 315px;
  background-color: #363636;
  margin: 50px 0;
`;

const ContainerVideoBar = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
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
        title="aw3d vide"
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
