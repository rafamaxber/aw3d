import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';
import VideoBar from '../components/VideoBar';
import Testimonials from '../components/Testimonials';
import { ComponentMiniPortfolio } from '../components/Portfolio';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="homePage">
        <Banner images={posts.banners} />
        <Welcome welcomeTitle={posts.welcomeTitle}>
          <PageContent content={posts.content} />
        </Welcome>
        <ComponentMiniPortfolio title={posts.miniPortfolio.title} images={posts.miniPortfolio.images} />
        <VideoBar />
        <Testimonials wrapperTestimonials={posts.wrapperTestimonials} />
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: {slug: {regex: "/index/" } } }
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
