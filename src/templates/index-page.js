import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';
import Content, { HTMLContent } from '../components/Content';

const IndexPageTemplate = ({ welcomeTitle, welcomeHtml, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div className="homePage">
      <Welcome welcomeTitle={welcomeTitle}>
        <PageContent className="content" content={welcomeHtml} />
      </Welcome>
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
      contentComponent={HTMLContent}
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
            welcomeTitle
          }
        }
      }
    }
  }
`;
