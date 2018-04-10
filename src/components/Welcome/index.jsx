import React from 'react';
import styled from 'styled-components';
import { Title } from '../Shared';

const Welcome = styled.section`
  text-align: center;
`;

const Text = styled.section`
  font-size: 1.8em;
  max-width: 1060px;
  padding: 0 15px 0;
  margin: auto;
  font-weight: 300;
  p {
    margin: 5px 0 0;
  }
`;

const Component = ({ title, htmlText }) => (
  <Welcome>
    <Title>
      <h2>Bem vindo a AW3D</h2>
    </Title>
    <Text>
      <p>
        É com muito prazer que a AW3D lhe apresenta o mundo da Impressão 3D e
        pode acreditar, você não vai conseguir viver mais sem ele.
      </p>
      <p>
        No trabalho, na escola, em casa, a impressão 3D irá fazer cada vez mais
        mais parte do seu dia a dia.
      </p>
      <p>
        A AW3D é revenda e assistência técnica autorizada da GTMax3D em São
        Paulo, marca com a melhor qualidade de impressão 3D e líder de vendas no
        seu segmento de FDM no Brasil.
      </p>
      <p>
        A AW3D e a GTMax3D quer estar junto com você nessas novas descobertas,
        faremos parte da mais nova revolução industrial.
      </p>
    </Text>
  </Welcome>
);

export default Component;
