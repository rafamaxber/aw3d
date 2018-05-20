import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Container } from '../Shared';
import Newsletter from '../Newsletter';
import Selo from '../../img/selo_150px.jpg';
import { menuLinks } from '../Header';

const Footer = styled.footer`
  background-color: #fff;
  color: #545454;
`;

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const styleLink = `
  color: inherit;
  margin: 5px 0;
`;

const ItemLink = styled(Link)`
  ${styleLink};
  @media (max-width: 600px) {
    padding: 5px 0;
  }
`;

const Column = styled.div`
  font-size: 1.6em;
  width: 25%;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    :last-child {
      margin-top: 0;
    }
    width: 100%;
    margin: 15px 0;
  }
`;

const LinkCustom = styled.a`
  ${styleLink};
`;
const Address = styled.address`
  font-style: normal;
  margin-top: 7px;
`;
const Copyright = styled.div`
  text-align: center;
  font-size: 1.2em;
  color: #545454;
  border-top: 2px solid #f8d322;
  padding: 7px;
`;

const Image = styled.img`
  width: 140px;
`;

const date = new Date();
const year = date.getFullYear();

const Component = () => (
  <Footer>
    <Newsletter />
    <Wrapper>
      <Column>
        <Image src={Selo} alt="AW3D GTMax3D Revenda autorizada São Paulo" />
      </Column>

      <Column>
        {[...menuLinks].reverse().map(item => (
          <ItemLink key={item.id} to={item.link}>
            {item.label}
          </ItemLink>
        ))}
      </Column>

      <Column itemscope itemtype="http://schema.org/LocalBusiness">
        <LinkCustom href="mailto:vendas@aw3d.com.br" title="Entre em contato por e-mail">
          vendas@aw3d.com.br
        </LinkCustom>
        <LinkCustom itemprop="telephone" href="tel:1131053633">
          (11) 3105-3633
        </LinkCustom>
        <LinkCustom itemprop="telephone" href="tel:11975442029">
          (11) 97544-2029
        </LinkCustom>
        <LinkCustom itemprop="telephone" href="tel:11974662955">
          (11) 97466-2955
        </LinkCustom>
      </Column>

      <Column>
        Conheça nosso Showroom
        <Address>
          Rua Roberto Simonsen 120 Sala 304<br />
          Centro de São Paulo <br />
          Ligue e agende uma visita!
        </Address>
      </Column>
    </Wrapper>
    <Copyright>
      AW3D A melhor impressão CNPJ: 24.585.302/0001-37 © Todos os direitos reservados. {year}
    </Copyright>
  </Footer>
);

export default Component;
