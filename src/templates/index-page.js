import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';
import Content, { HTMLContent } from '../components/Content';

const IndexPageTemplate = ({ welcomeTitle }) => {
  return (
    <div className="homePage">
      <Welcome welcomeTitle={welcomeTitle} />
    </div>
  );
};

const IndexPage = ({ data }) => {
  const {
    welcomeTitle,
  } = data.allMarkdownRemark.edges[0].node.frontmatter;
  const { html } = data.allMarkdownRemark.edges[0].node;

  return (
    <IndexPageTemplate
      welcomeTitle={welcomeTitle}
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
            welcomeTitle
          }
        }
      }
    }
  }
`;
