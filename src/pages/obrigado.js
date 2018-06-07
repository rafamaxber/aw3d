import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import {
  Container,
  Title,
} from '../components/Shared';

import scriptConversionId from '../components/LeadDataLayer';

const Wrapper = styled(Container)`
  max-width: 700px;
  text-align: justify;
  text-align: center;
  margin: 0 auto 70px;
`;
const Text = styled.div`
  font-size: 2em;
  margin-bottom: ${props => (props.top ? '30px' : '0')};
`;
const ContainerBtns = styled.div`
  margin: 15px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 500px;
`;
const Btn = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid ${props => (props.primary ? '#f8d438' : '#000')};
  color: #000;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5em;
`;
const StoreBtn = Btn.withComponent('a');

const Span = styled.span`
  margin: 0px 10px;
  display: inline-block;
  font-size: 1.5em;
`;

const Obrigado = () => (
  <Wrapper>
    <Helmet title="Agradecemos o contato!" />
    <Title>
      <h1>Nós da AW3D agradecemos o contato!</h1>
    </Title>
    <Text top>
      Retornaremos o mais rápido possível com uma resposta.
    </Text>
    <Text>
      Enquanto aguarda nossa resposta você pode:
    </Text>
    <ContainerBtns>
      <StoreBtn href="https://www.aw3dshop.com.br/?utm_source=site_institucional_obrigado">
        Conhecer nossa loja
      </StoreBtn>
      <Span>
        ou
      </Span>
      <Btn to="/" primary>
        Ir para a pagina inicial
      </Btn>
    </ContainerBtns>
    <span dangerouslySetInnerHTML={{ __html: scriptConversionId }}></span>
  </Wrapper>
);

export default Obrigado;
