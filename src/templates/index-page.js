import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';

const IndexPageTemplate = ({ banners, welcomeTitle, welcomeHtml }) => (
  <div className="homePage">
    <Banner images={banners} />
    <Welcome welcomeTitle={welcomeTitle} welcomeHtml={welcomeHtml} />
  </div>
);

const IndexPage = ({ data }) => {
  const {
    banners,
    welcomeTitle,
  } = data.allMarkdownRemark.edges[0].node.frontmatter;
  const { html } = data.allMarkdownRemark.edges[0].node;

  return (
    <IndexPageTemplate
      banners={banners}
      welcomeTitle={welcomeTitle}
      welcomeHtml={html}
    />
  );
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/index/" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            image
            welcomeTitle
            banners {
              id
              src
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
