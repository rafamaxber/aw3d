import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../../components/Content';
import { Container, Title } from '../../components/Shared';

const BlogPage = ({ data: { allMarkdownRemark: all } }) => {
  console.log(all);
  return (
    <Container>
      <Helmet title="Blog" />
    </Container>
  );
};

export default BlogPage;

export const blogPageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { slug: { regex: "/blog/" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            title
            date
            description
            tags
            full_image
          }
        }
      }
    }
  }
`;
