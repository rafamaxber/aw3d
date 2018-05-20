import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Container, Title } from '../Shared';

const SuccessCase = styled.section`
  margin-bottom: 40px;
`;

const MiniPortfolio = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    display: block;
  }
`;

const WrapperLink = styled(Link)`
  width: 28.5%;
  display: block;
  margin: 0 1.2% 0;
  @media (max-width: 480px) {
    margin: 0 auto 30px;
    width: 100%;
    max-width: 360px;
  }
`;

const CardImage = styled.div``;

const Image = styled.img`
  width: 100%;
  transition: ease 0.3s;
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px -10px #8a8a8a;
  }
`;
const SuccessCaseTitle = styled(Title)`
  margin-bottom: 15px;
`;
const CardTitle = styled.div`
  text-align: center;
  font-size: 1.8em;
  margin-top: 5px;
  color: #545454;
  font-weight: 300;
`;

const ComponentMiniPortfolio = ({ title, images }) => (
  <SuccessCase>
    <SuccessCaseTitle>
      <h2>{title}</h2>
    </SuccessCaseTitle>
    <Container>
      <MiniPortfolio>
        {images.map(image => (
          <WrapperLink key={image.id} to={image.url}>
            <CardImage>
              <Image src={image.src} alt={image.alt} />
            </CardImage>
            <CardTitle>{image.title}</CardTitle>
          </WrapperLink>
        ))}
      </MiniPortfolio>
    </Container>
  </SuccessCase>
);

export default ComponentMiniPortfolio;
