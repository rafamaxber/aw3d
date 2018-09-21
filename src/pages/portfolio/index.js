import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Content, { HTMLContent } from '../../components/Content';
import { Container, Title } from '../../components/Shared';

const Wrapper = styled.div`
  
`;
const WrapperText = styled.div`
  font-size: 1.8em;
`;

const Gallery = styled(Link)`
  display: flex;
  justify-content: left;
  align-content: center;
  max-height: 420px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;
const BigImage = styled.div`
  width: 750px;
  @media (max-width: 1237px) {
  }
`;
const Thumbs = styled.div`
  width: 405px;
  @media (max-width: 1093px) {
    width: 280px;
  }
  @media (max-width: 918px) {
    width: 405px;
  }
  img {
    max-height: 225px;
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;

const PortfolioPage = ({ data: { allMarkdownRemark: { group } } }) => (
  <Container>
    <Helmet
      title="Portfólio"
    >
      <meta name="description" content="A AW3D atua no mercado de protótipos e mock-ups, atendendo a uma das maiores necessidades da indústria mundial que é a redução de tempo de desenvolvimento de novos produtos. A tecnologia de Impressão 3D GTMax3D entrega uma solução de baixíssimo custo, rapidez, personalização e resistência." />
    </Helmet>
    <Wrapper>
      {group.map(({ edges }) => {
        const item = edges[0].node;
        let photos = item.frontmatter.images.splice(3);
        photos = item.frontmatter.images;
        return (
          <div key={item.fields.slug}>
            <Title>
              <h1>{item.frontmatter.title}</h1>
            </Title>
            <WrapperText>
              <HTMLContent content={item.html} />
            </WrapperText>
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
