import React from 'react';
import styled from 'styled-components';
import { kebabCase } from 'lodash';
import Link from 'gatsby-link';
import { Title } from '../Shared';

export const WrapperTags = styled.div``;
export const TagsTitle = styled(Title)``;
export const Taglist = styled.ul`
  text-align: center;
`;
export const TaglistItem = styled.li`
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

const Tags = ({ title, tags }) => (
  <WrapperTags>
    <TagsTitle>
      <h3>{title}</h3>
    </TagsTitle>
    <Taglist>
      {tags.map(tag => (
        <TaglistItem key={`${tag}tag`}>
          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
        </TaglistItem>
      ))}
    </Taglist>
  </WrapperTags>
);

export default Tags;
