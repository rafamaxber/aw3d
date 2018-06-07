import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Content, { HTMLContent } from '../components/Content';
import { Container, Title } from '../components/Shared';

const Wrapper = styled.div`
  font-size: 1.8em;
  max-width: 700px;
  text-align: justify;
  margin: 0 auto 80px;
  .content a {
    text-decoration: underline;
  }
`;

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Container>
      <Helmet
        title="Quem Somos"
      >
        <meta name="description" content="A AW3D possui profissionais altamente qualificados junto a GTMax3D para garantir a qualidade do seu trabalho seja para atender a indústria, arquitetura, engenharia, medicina/ odonto, educação, eventos, brindes personalizados entre outros." />
      </Helmet>
      <Title>
        <h1>{title}</h1>
      </Title>
      <Wrapper>
        <PageContent className="content" content={content} />
      </Wrapper>
    </Container>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const AboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
