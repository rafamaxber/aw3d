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

export const PortfolioPageTemplate = ({ title, content, contentComponent }) => {
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

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const PortfolioPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <PortfolioPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PortfolioPage;

export const PortfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
