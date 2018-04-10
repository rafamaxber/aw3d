import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';

const bannerImages = [
  {
    src: 'https://placehold.it/1600x500?text=banner%201',
    alt: '',
    id: 0,
  },
  {
    src: 'https://placehold.it/1600x500?text=banner%202',
    alt: '',
    id: 1,
  },
  {
    src: 'https://placehold.it/1600x500?text=banner%203',
    alt: '',
    id: 2,
  },
];

const IndexPageTemplate = ({
 image, title, heading, description 
}) => (
  <div className="homePage">
    <Banner images={bannerImages} />
    <Welcome />
  </div>
);

const IndexPage = ({ data }) => {
  console.log(data.allMarkdownRemark.edges[0].node.frontmatter);

  return <IndexPageTemplate />;
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/index/" } } }) {
      edges {
        node {
          frontmatter {
            title
            image
            banners {
              id
              caminho
              alt
            }
            description
            testimonials {
              author
              quote
            }
          }
        }
      }
    }
  }
`;
