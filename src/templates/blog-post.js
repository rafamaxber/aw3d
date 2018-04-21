import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Container, Title } from '../components/Shared';
import Content, { HTMLContent } from '../components/Content';

const Wrapper = styled.div``;
const ContainerPost = styled(Container)`
  p,
  ul,
  ol {
    max-width: 800px;
    margin: 15px auto;
  }
  ul,
  ol {
    padding: 15px;
    li {
      padding: 5px 0;
    }
  }
`;
const WrapperTitlePost = styled.div`
  display: flex;
  height: 450px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  background-attachment: fixed;
`;
const bgText = `
  padding: 10px 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 25px;
`;
const TitlePost = styled(Title)`
  ${bgText};
  h1 {
    font-size: 4.5em;
    margin: 15px 0 20px;
  }
`;
const WrapperPost = styled.div`
  font-size: 1.8em;
`;
const DatePost = styled.div`
  font-size: 1.4em;
  font-weight: normal;
`;
const DescriptionPost = styled.div`
  font-size: 1.6em;
  font-weight: normal;
`;
const WrapperTags = styled.div``;
const TagsTitle = styled(Title)``;
const Taglist = styled.ul`
  text-align: center;
`;
const TaglistItem = styled.li`
  list-style: none;
  display: inline-block;
  a {
    border: 2px solid #f8d322;
    background-color: #f8d322;
    font-weight: bold;
    border-radius: 25px;
    padding: 8px 10px;
    color: #000;
    :hover {
      background-color: #fff;
    }
  }
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  date,
  title,
  helmet,
  full_image,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Wrapper>
      {helmet || ''}
      <WrapperTitlePost style={{ backgroundImage: `url(${full_image})` }}>
        <TitlePost>
          <DatePost>{date}</DatePost>
          <h1>{title}</h1>
          <DescriptionPost>{description}</DescriptionPost>
        </TitlePost>
      </WrapperTitlePost>
      <ContainerPost>
        <WrapperPost>
          <PostContent content={content} />
        </WrapperPost>
        {tags && tags.length ? (
          <WrapperTags style={{ marginTop: '4rem' }}>
            <TagsTitle>
              <h3>Tags</h3>
            </TagsTitle>
            <Taglist>
              {tags.map(tag => (
                <TaglistItem key={`${tag}tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </TaglistItem>
              ))}
            </Taglist>
          </WrapperTags>
        ) : null}
      </ContainerPost>
      <script id="dsq-count-scr" src="//rafael-5.disqus.com/count.js" async />
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
      helmet={
        <Helmet
          description={post.frontmatter.description}
          title={`${post.frontmatter.title} | Blog`}
        />
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      full_image={post.frontmatter.full_image}
      date={post.frontmatter.date}
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
        date(formatString: "MM/DD/YYYY")
        title
        description
        tags
      }
    }
  }
`;
