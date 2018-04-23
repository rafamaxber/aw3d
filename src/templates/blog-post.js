import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Disqus from 'disqus-react';
import { Container, Title } from '../components/Shared';
import Content, { HTMLContent } from '../components/Content';
import Tag from '../components/Tag';

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
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
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

const WrapperDisqus = styled.div`
  background-color: #fff;
  margin-top: 30px;
  padding: 15px 0;
`;
const ContainerDisqus = styled.div`
  max-width: 830px;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
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
  siteConfig,
  slug,
}) => {
  const PostContent = contentComponent || Content;
  const { disqusShortname } = siteConfig;
  const disqusConfig = {
    url: `${siteConfig.basePath}${slug}`,
    identifier: 1,
    title,
  };

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
      </ContainerPost>
      <WrapperDisqus>
        <ContainerDisqus>
          <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </ContainerDisqus>
      </WrapperDisqus>
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
  const { siteMetadata: siteConfig } = data.site;

  return (
    <BlogPostTemplate
      siteConfig={siteConfig}
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      slug={post.fields.slug}
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
    site {
      siteMetadata {
        title
        author
        basePath
        disqusShortname
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
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
