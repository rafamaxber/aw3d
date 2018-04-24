import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Content, { HTMLContent } from '../components/Content';
import { Container, Title } from '../components/Shared';

const Wrapper = styled.div`
  font-size: 1.8em;
  max-width: 700px;
  text-align: justify;
  margin: auto;
  .content a {
    text-decoration: underline;
  }
`;

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
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

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const AboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
