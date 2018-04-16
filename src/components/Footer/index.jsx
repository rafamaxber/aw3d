import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import styled from 'styled-components';
import { Container } from '../Shared';
import Newsletter from '../Newsletter';
import Logo from "../../img/logo_aw3d.svg";
import Selo from "../../img/selo_150px.jpg";
import { menuLinks } from '../Header';

const Footer = styled.footer`
  background-color: #fff;
  color: #545454;
`;

const Wrapper = styled(Container)`
  display: flex;
  justify-content:space-between;
  align-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const styleLink = `
  display: block;
  color: inherit;
  margin: 5px 0;
`;

const ItemLink = styled(Link)`
  ${styleLink};
`;

const Column = styled.div`
  font-size: 1.6em;
  width: 25%;
`;

const LinkCustom = styled.a`
  ${styleLink};
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 1.2em;
  color: #545454;
  border-top: 2px solid #f8d322;
  padding: 7px;
`;

const date = new Date();
const year = date.getFullYear();

const Component = () => (
  <Footer>
    <Newsletter />
    <Wrapper>
      <Column>
        <img src={Selo} />
      </Column>

      <Column>
        {[...menuLinks].reverse().map(item => (
          <ItemLink key={item.id} to={item.link}>
            {item.label}
          </ItemLink>
        ))}
      </Column>

      <Column>
        <LinkCustom
          href="mailto:vendas@aw3d.com.br"
          title="Entre em contato por e-mail"
        >
          vendas@aw3d.com.br
        </LinkCustom>
        <LinkCustom>(11) 3105-3633</LinkCustom>
        <LinkCustom>(11) 97544-2029</LinkCustom>
        <LinkCustom>(11) 97466-2955</LinkCustom>
      </Column>

      <Column>
        Conheça nosso Showroom
        <address>
          Rua Roberto Simonsen 120 Sala 304<br />
          Centro de São Paulo <br />
          Ligue e agende uma visita!
        </address>
      </Column>
    </Wrapper>
    <Copyright>
      AW3D A melhor impressão CNPJ: 24.585.302/0001-37 © Todos os direitos
      reservados. {year}
    </Copyright>
  </Footer>
);

export default Component;
