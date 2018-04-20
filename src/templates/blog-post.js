import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Container, Title } from '../components/Shared';
import Content, { HTMLContent } from '../components/Content';

const Wrapper = styled.div``;
const TitlePost = styled(Title)`
  text-align: left;
`;
const WrapperPost = styled.div`
  font-size: 1.6em;
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Wrapper>
      {helmet || ''}
      <Container>
        <TitlePost>
          <h1>{title}</h1>
        </TitlePost>
        <WrapperPost>
          <PostContent content={content} />
        </WrapperPost>
        {tags && tags.length ? (
          <div style={{ marginTop: '4rem' }}>
            <h4>Tags</h4>
            <ul className="taglist">
              {tags.map(tag => (
                <li key={`${tag}tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </Wrapper>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet description={post.frontmatter.description} title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        full_image
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
