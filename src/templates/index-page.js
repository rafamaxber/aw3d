import React from 'react';
import PropTypes from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';

export const IndexPageTemplate = ({ 
  welcomeTitle, 
  content, 
  contentComponent,
  banners,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="homePage">
      <Banner images={banners} />
      <Welcome welcomeTitle={welcomeTitle}>
        <PageContent content={content} />
      </Welcome>
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
      welcomeTitle={post.frontmatter.welcomeTitle}
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
        testimonials {
          author
          name
          quote
        }
      }
    }
  }
`;
