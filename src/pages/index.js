import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';
import VideoBar from '../components/VideoBar';
import Testimonials from '../components/Testimonials';
import { ComponentMiniPortfolio } from '../components/Portfolio';

export const IndexPageTemplate = ({
  welcomeTitle,
  content,
  contentComponent,
  banners,
  miniPortfolio,
  wrapperTestimonials,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="homePage">
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
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const IndexPageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: {slug: {eq: "/"} } }
    ) {
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
