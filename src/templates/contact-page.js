import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Content, { HTMLContent } from '../components/Content';
import { Container, Title } from '../components/Shared';
import Map from '../components/Map';

const Wrapper = styled.div`
`;

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Wrapper>
      <Title>
        <h1>{title}</h1>
      </Title>
      <Map />
    </Wrapper>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
