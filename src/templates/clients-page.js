import React from 'react';
import PropTypes from 'prop-types';
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
