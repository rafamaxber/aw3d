import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import { Container, Title } from '../components/Shared';
import Gallery from '../components/PortfolioLightbox';

const Wrapper = styled.div`
  font-size: 1.6em;
  max-width: 700px;
`;

const TitlePost = Title.extend`
  text-align: left;
  padding-bottom: 0;
`;

export const PortfolioPageTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  images,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Container>
      {helmet || null}
      <TitlePost>
        <h1>{title}</h1>
      </TitlePost>
      <Wrapper>
        <PostContent className="content" content={content} />
      </Wrapper>
      <Gallery photos={images} columns={3} />
    </Container>
  );
};

PortfolioPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.instanceOf(Helmet).isRequired,
  images: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

const PortfolioPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <PortfolioPageTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet description={post.frontmatter.description} title={`${post.frontmatter.title} | Portfolio`} />}
      title={post.frontmatter.title}
      images={post.frontmatter.images}
    />
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default PortfolioPage;

export const pageQuery = graphql`
  query PortfolioPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        images {
          alt
          id
          src
          width
          height
        }
        title
        description
      }
    }
  }
`;
