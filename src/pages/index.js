import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';
import VideoBar from '../components/VideoBar';
import Testimonials from '../components/Testimonials';
import ComponentMiniPortfolio from '../components/Portfolio';

const jsonSchema = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  url: 'https://aw3d.com.br/',
  name: 'AW3D',
  alternateName: 'AW3D',
  department: 'Impressão 3D',
  foundingDate: '2015',
  logo: 'https://aw3d.com.br/img/favicons/icon-512x512.png',
  description:
    'É com muito prazer que a AW3D lhe apresenta o mundo da Impressão 3D e pode acreditar, você não vai conseguir viver mais sem ele. No trabalho, na escola, em casa, a impressão 3D irá fazer cada vez mais mais parte do seu dia a dia.',
  sameAs: ['http://facebook.com/aw3dsolutions'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+55 (11) 3105-3633',
      contactType: 'customer service',
      areaServed: 'BR',
    },
    {
      '@type': 'PostalAddress',
      addressCountry: 'Brasil',
      addressRegion: 'Sâo Paulo',
      addressLocality: 'Sé',
      postalCode: '01017-020',
      streetAddress: 'Rua Roberto Simonsen 120 Sala 304',
    },
  ],
};

const schema = {
  type: 'application/ld+json',
  innerHTML: JSON.stringify(jsonSchema),
};

export const IndexPageTemplate = ({
  welcomeTitle,
  content,
  contentComponent,
  banners,
  miniPortfolio,
  wrapperTestimonials,
  helmet,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="homePage">
      {helmet || ''}
      <Banner images={banners} />
      <Welcome welcomeTitle={welcomeTitle}>
        <PageContent content={content} />
      </Welcome>
      <ComponentMiniPortfolio title={miniPortfolio.title} images={miniPortfolio.images} />
      <VideoBar />
      <Testimonials wrapperTestimonials={wrapperTestimonials} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const post = data.allMarkdownRemark.edges[0].node;
  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      banners={post.frontmatter.banners}
      wrapperTestimonials={post.frontmatter.wrapperTestimonials}
      welcomeTitle={post.frontmatter.welcomeTitle}
      miniPortfolio={post.frontmatter.miniPortfolio}
      content={post.html}
      helmet={
        <Helmet script={[schema]} />
      }
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const IndexPageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 1000, filter: { fields: { slug: { eq: "/" } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            title
            welcomeTitle
            banners {
              alt
              id
              src
            }
            miniPortfolio {
              title
              images {
                alt
                id
                url
                src
                title
              }
            }
            wrapperTestimonials {
              title
              testimonials {
                author
                name
                quote
                avatar
              }
            }
          }
        }
      }
    }
  }
`;
