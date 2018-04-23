import React from 'react';
import Helmet from 'react-helmet';
import { kebabCase } from 'lodash';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { WrapperTags, Taglist, TaglistItem } from '../../components/Tag';
import { Container, Title } from '../../components/Shared';

const WrapperTagsCustom = styled(WrapperTags)`
  min-height: 400px;
`;

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Container>
    <Helmet title={`Tags | ${title}`} />
    <Title>
      <h1>Tags</h1>
    </Title>
    <WrapperTagsCustom>
      <Taglist>
        {group.map(tag => (
          <TaglistItem key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} - ( {tag.totalCount} )
            </Link>
          </TaglistItem>
        ))}
      </Taglist>
    </WrapperTagsCustom>
  </Container>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
