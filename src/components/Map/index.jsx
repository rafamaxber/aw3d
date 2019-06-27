import React, { PureComponent } from "react";
import { Container } from "../Shared";
import GoogleMapReact from 'google-map-react'
import styled from "styled-components";

const MarkComponent = styled.address`
  background-color: rgba(255, 255, 255, 0.9);
  color: #000;
  width: 260px;
  padding: 20px;
  display: block;
  border: 2px solid #ffcc30;
  border-radius: 10px;
`;

const Mark = () => (
  <MarkComponent>
    <b>Conheça nosso Showroom</b>
    <p>Av. Pres. Epitácio Pessoa, 4.940 – Sala 207</p>
    <p>Cabo Branco – João Pessoa/PB</p>
    <p>Ligue e agende uma visita! <u>(83) 99145-6548</u></p>
  </MarkComponent>
);

const GoogleMapContainer = styled.div`
  width: 100%;
  height: 450px;
`;

export default class Map extends PureComponent {

  static defaultProps = {
    center: { lat: -7.119307, lng: -34.826649 },
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
            lat={ -7.119307 }
            lng={ -34.826649 }
          />
        </GoogleMapReact>
      </GoogleMapContainer>
    )
  }
}
