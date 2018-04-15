import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';
import Testimonials from '../components/Testimonials';
import VideoBar from "../components/VideoBar";
import { ComponentMiniPortfolio } from '../components/Portfolio';

export const IndexPageTemplate = ({
  welcomeTitle,
  content,
  contentComponent,
  banners,
  miniPortfolio,
  testimonials,
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
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <IndexPageTemplate
      contentComponent={HTMLContent}
      banners={post.frontmatter.banners}
      testimonials={post.frontmatter.testimonials}
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
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        welcomeTitle
        banners {
          id
          src
          alt
        },
        miniPortfolio {
          title
          images {
            alt
            id
            src
            title
          }
        },
        testimonials {
          author
          name
          quote
        }
      }
    }
  }
`;
