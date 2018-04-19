import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Content, { HTMLContent } from '../../components/Content';
import { Container, Title } from '../../components/Shared';

const Wrapper = styled.div`
  font-size: 1.6em;
`;

const TitlePost = Title.extend`
  text-align: left;
  padding-bottom: 0;
  h2 {
    font-size: 1.3em;
  }
`;

const Gallery = styled(Link)`
  display: flex;
  justify-content: center;
  align-content: center;
  max-height: 450px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  :hover {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: block;
    }
  }
`;
const BigImage = styled.div`
  width: 65%;
`;
const Thumbs = styled.div`
  width: 35%;
  img {
    max-height: 225px;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;

const PortfolioPage = ({ data: { allMarkdownRemark: { group } } }) => {
  return (
    <Container>
      <Title>
        <h1>O que andamos fazendo</h1>
      </Title>
      <Wrapper>
        {group.map(({ edges }) => {
          const item = edges[0].node;
          let photos = item.frontmatter.images.splice(3);
          photos = item.frontmatter.images;
          return (
            <div key={item.fields.slug}>
              <TitlePost>
                <h2>{item.frontmatter.title}</h2>
              </TitlePost>
              <HTMLContent content={item.html} />
              <Gallery to={item.fields.slug}>
                <BigImage>
                  <Image src={photos[0].src} alt={photos[0].alt} />
                </BigImage>
                <Thumbs>
                  <Image src={photos[1].src} alt={photos[1].alt} />
                  <Image src={photos[2].src} alt={photos[2].alt} />
                </Thumbs>
              </Gallery>
            </div>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default PortfolioPage;

export const portfolioPageQuery = graphql`
  query PortfolioQuery {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/portfolio/" } } }) {
      group(field: frontmatter___position) {
        edges {
          node {
            fields {
              slug
            }
            html
            frontmatter {
              position
              title
              description
              images {
                id
                alt
                width
                height
                src
              }
            }
          }
        }
      }
    }
  }
`;
