import React, { PureComponent } from "react";
import { Container } from "../Shared";
import GoogleMapReact from 'google-map-react'
import styled from "styled-components";

const MarkComponent = styled.address`
  background-color: rgba(255, 255, 255, 0.9);
  color: #000;
  width: 230px;
  padding: 20px;
  display: block;
  border: 2px solid #ffcc30;
  border-radius: 10px;
`;

const Mark = () => (
  <MarkComponent>
    <b>Conheça nosso Showroom</b>
    <p>Rua Roberto Simonsen 120 Sala 304 Centro – São Paulo</p>
    <p>Ligue e agende uma visita! <u>3105.3633</u></p>
  </MarkComponent>
);

const GoogleMapContainer = styled.div`
  width: 100%;
  height: 450px;
`;

export default class Map extends PureComponent {

  static defaultProps = {
    center: { lat: -23.541785, lng: -46.632293 },
    zoom: 15,
  };

  render() {
    return (
      <GoogleMapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBAFYGjLoC4KcdBlgoiosd73Avx79aKSpQ' }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <Mark
            lat={ -23.541785 }
            lng={ -46.632293 }
          />
        </GoogleMapReact>
      </GoogleMapContainer>
    )
  }
}
