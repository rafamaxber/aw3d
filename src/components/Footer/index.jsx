import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import styled from 'styled-components';
import { Container } from '../Shared';

const Footer = styled.footer`
  background-color: #545454;
  color: #fff;
`;

const Wrapper = styled(Container)`
  display: flex;
  justify-content:space-between;
  align-content: center;
`;

const Column = styled.div`
  font-size: 1.5em;
`;


const LinkCustom = styled.a`
  display: block;
`;

const Copyright = styled.div``;

const Component = () => (
  <Footer>
    <Wrapper>
      <Column>
        <LinkCustom href="mailto:vendas@aw3d.com.br" title="Entre em contato por e-mail">
          vendas@aw3d.com.br
        </LinkCustom>
        <LinkCustom>11 3105.3633</LinkCustom>
        <LinkCustom>11 97544.2029</LinkCustom>
        <LinkCustom>11 97466.2955</LinkCustom>
      </Column>

      <Column>
        Conheça nosso Showroom Rua Roberto Simonsen 120 Sala 304 Centro – São
        Paulo Ligue e agende uma visita! 3105.3633
      </Column>
    </Wrapper>
    <Copyright>
      AW3D A melhor impressão CNPJ: 24.585.302/0001-37 © Todos os direitos
      reservados. 2016
    </Copyright>
  </Footer>
);

export default Component;
