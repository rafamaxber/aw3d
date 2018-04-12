import React from 'react';
import styled from 'styled-components';
import { Title } from '../Shared';

const Welcome = styled.section`
  text-align: center;
`;

const Text = styled.section`
  font-size: 1.8em;
  max-width: 1060px;
  padding: 0 15px 0;
  margin: auto;
  font-weight: 300;
  p {
    margin: 5px 0 0;
  }
`;

const Component = ({ welcomeTitle, children }) => (
  <Welcome>
    <Title>
      <h2>{welcomeTitle}</h2>
    </Title>
    <Text>{children}</Text>
  </Welcome>
);

export default Component;
