import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Container, Title } from '../../components/Shared';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const WrapperPost = styled.div`
  width: 32%;
  margin-bottom: 3%;
`;
const WrapperImage = styled.div``;
const ImagePost = styled.img`
  width: 100%;
`;
const TitlePost = styled.h2`
  font-size: 1.8em;
`;
const DescriptionPost = styled.p`
  font-size: 1.4em;
`;
const LinkPost = styled(Link)`
  display: block;
  margin-top: 10px;
  text-decoration: underline;
`;

const BlogPage = ({ data: { allMarkdownRemark: all } }) => (
  <Container>
    <Helmet title="Blog" />
    <Title>
      <h1>Blog</h1>
    </Title>
    <Wrapper>
      {all.edges.map(({ node }) => (
        <WrapperPost key={node.fields.slug}>
          <WrapperImage>
            <Link to={node.fields.slug}>
              <ImagePost src={node.frontmatter.full_image} alt={node.frontmatter.title} />
            </Link>
          </WrapperImage>
          <TitlePost>{node.frontmatter.title}</TitlePost>
          <DescriptionPost>
            {node.frontmatter.description}
            <LinkPost to={node.fields.slug}>+ Ler mais</LinkPost>
          </DescriptionPost>
        </WrapperPost>
      ))}
    </Wrapper>
  </Container>
);

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
          frontmatter {
            title
            date
            description
            full_image
          }
        }
      }
    }
  }
`;
