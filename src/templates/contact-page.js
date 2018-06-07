import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import { Container, Title } from '../components/Shared';
import Map from '../components/Map';
import FormContact from '../components/FormContact';

const Wrapper = styled.div`
`;

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Wrapper>
      <Helmet title="Contato">
        <meta name="description" content="Visite o nosso showroom AW3D . Venha ver de perto as impressoras 3D da GTMax3D. Impressora PRO CORE A1v2, Impressora PRO CORE A3, Impressora PRO CORE H4, Impressora PRO CORE GT4, Filamento ABS MG94, Filamento PLA, Filamento Tritan." />
      </Helmet>
      <Title>
        <h1>{title}</h1>
      </Title>
      <Container>
        <FormContact />
      </Container>
      <Map />
    </Wrapper>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
