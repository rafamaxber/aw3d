import React from "react";
import Link, { withPrefix } from "gatsby-link";
import styled from "styled-components";
import { Container } from "../Shared";
import Map from "../Map";

const Footer = styled.footer`
  background-color: #545454;
  color: #fff;
`

const Component = () => (
  <Footer>
    <Map />
    <Container>
      AW3D A melhor impressão
      CNPJ: 24.585.302/0001-37
      © Todos os direitos reservados. 2016

      vendas@aw3d.com.br
      11 3105.3633
      11 97544.2029
      11 97466.2955

      Conheça nosso Showroom
      Rua Roberto Simonsen 120 Sala 304
      Centro – São Paulo
      Ligue e agende uma visita!
      3105.3633
    </Container>
  </Footer>
);

export default Component;
