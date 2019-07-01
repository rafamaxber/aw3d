import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Container } from '../Shared';
import Newsletter from '../Newsletter';
import { menuLinks } from '../Header';

const Footer = styled.footer`
  background-color: #fff;
  color: #545454;
`;

const Wrapper = styled(Container)`
  display: flex;
  width: 1200px;
  margin: auto;
  justify-content: space-between;
  align-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    text-align: center;
    max-width: 1200px;
    width: 100%;
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
  width: 33%;
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

const date = new Date();
const year = date.getFullYear();

const Component = () => (
  <Footer>
    <Newsletter />
    <Wrapper>

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
        <LinkCustom itemprop="telephone" href="tel:83991456548">
          (83) 99145-6548
        </LinkCustom>
        <LinkCustom itemprop="telephone" href="tel:8335761190">
          (83) 3576-1190
        </LinkCustom>
      </Column>

      <Column>
        Conheça nosso Showroom
        <Address>
          Av. Pres. Epitácio Pessoa, 4.940 – Sala 207<br />

          Cabo Branco – João Pessoa/PB <br />

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
