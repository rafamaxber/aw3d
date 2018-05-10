import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import {
  Container,
  Title,
} from '../components/Shared';

const Wrapper = styled(Container)`
  font-size: 2em;
  max-width: 700px;
  text-align: justify;
  text-align: center;
  margin: 0 auto 70px;
`;

const Text = styled.div`
  font-size: 1.1em;
`;

const Btn = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid ${props => (props.primary ? '#f8d438' : '#000')};
  color: #000;
  text-align: center;
  text-transform: uppercase;
  font-size: .7em;
`;
const StoreBtn = Btn.withComponent('a');
const ContainerBtns = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Span = styled.span`
  margin: 0 10px;
  display: inline-block;
`;

const NotFoundPage = () => (
  <Wrapper>
    <Title>
      <h1>404</h1>
    </Title>
    <Text>
      Desculpe, mas a página que você procura não foi encontrada!
    </Text>
    <Text>
      Pode ser que você tenha digitado o endereço errado ou o link que você clicou esteja quebrado.
    </Text>
    <ContainerBtns>
      <StoreBtn href="https://www.aw3dshop.com.br/?utm_source=site_institucional_404">
        Conheça nossa loja
      </StoreBtn>
      <Span>
        ou
      </Span>
      <Btn to="/" primary>
        Ir para a pagina inicial
      </Btn>
    </ContainerBtns>
  </Wrapper>
);

export default NotFoundPage;
