import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';

export const SobrePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SobrePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SobrePage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <SobrePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

SobrePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SobrePage;

export const SobrePageQuery = graphql`
  query SobrePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
