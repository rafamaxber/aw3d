import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Content, { HTMLContent } from '../components/Content';
import { Container, Title } from '../components/Shared';

const Wrapper = styled.div`
  font-size: 1.8em;
  max-width: 700px;
  text-align: justify;
  margin: 0 auto 80px;
  .content a {
    text-decoration: underline;
  }
`;

export const ClientsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Container>
      <Helmet title="Clientes">
        <meta name="description" content="Banco do Brasil, Conex, Lizzy Kahl, Agência Hub , Agência Hype/Renault, Forma Turismo, OMG Graduados, Chillibeans, iDesign Group (MAC Engenharia), Studio Caan (Disney), SV Usinagem, Mcaa Arquitetos, Studio Ino, Sinctronics, Projeto Mãos Dadas, Explorum, Kota, Magic Toys, IT4D, Centro Cultural Banco do Brasil, Thermoval, Vepan, Toys B2B, Click Automotiva, SESC Jundiaí, Poligeomeca, Ateliê Bia Cravol, Brinquedos Bandeirantes, L4U, Tecfil, Ateliê Modestamente Revolucionário, Tudo Mini, Ateliê Oficina da Memória (Titina Corso), Dra. Giselle Caselato, Interlight, LARC Engenharia, Likkaplas, Volkswagen do Brasil, Universidade Mackenzie, Universidade Federal do Semi-Árido" />
      </Helmet>
      <Title>
        <h1>{title}</h1>
      </Title>
      <Wrapper>
        <PageContent className="content" content={content} />
      </Wrapper>
    </Container>
  );
};

ClientsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ClientsPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <ClientsPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ClientsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ClientsPage;

export const ClientsPageQuery = graphql`
  query ClientsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
