import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import styled from 'styled-components';

import { Container, Title } from '../Shared';
import Gallery from '../PortfolioLightbox';

const SuccessCase = styled.section`
  margin-bottom: 40px;
`;

const MiniPortfolio = styled.div`
  display: flex;
`;

const WrapperLink = styled(Link)`
  width: 33.33%;
  display: block;
`;

const CardImage = styled.div`
`;

const Image = styled.img`
  width: 100%;
  transition: ease 0.3s;
  :hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px -10px #8a8a8a;
  }
`;

const CardTitle = styled.div`
  text-align: center;
  font-size: 1.8em;
  margin-top: 5px;
  color: #545454;
  font-weight: 300;
`;

const GoToLink = styled(Link)`
  float: right;
  margin: 20px 0;
  font-size: 1.4em;
  color: #6085f9;
  text-transform: lowercase;
  font-weight: bold;
`;

const MiniPortfolioTitle = styled.h3`
  font-size: 2.3em;
  font-weight: 700;
  margin: 20px 0;
`;

export const ComponentMiniPortfolio = ({ title, images }) => (
  <SuccessCase id="portfolio">
    <Title className="success-case-title">
      <h2>{ title }</h2>
    </Title>
    <Container>
      <MiniPortfolio>
        {
          images.map(image => (
            <WrapperLink key={image.id} to={`/portfolio?id=${image.id}`}>
              <CardImage>
                <Image src={image.src} alt={image.alt} />
              </CardImage>
              <CardTitle>
                {image.title}
              </CardTitle>
            </WrapperLink>
          ))
        }
      </MiniPortfolio>
      <GoToLink to="/portfolio">Ver mais</GoToLink>
    </Container>
  </SuccessCase>
);

export const Portfolio = () => (
  <SuccessCase id="portfolio">
    <Title className="success-case-title">
      <h1>Conheça nossos projetos</h1>
    </Title>
    <MiniPortfolio>
      <Container>
        <MiniPortfolioTitle>
          Chillibeans Caveira
        </MiniPortfolioTitle>
        <Gallery
          photos={[
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/20180124_114859.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/20180124_115325.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/IMG_0971.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/IMG_0972.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/IMG_0980.jpg'), width: 4, height: 3 
},
          ]}
        />
      </Container>
    </MiniPortfolio>

    <MiniPortfolio>
      <Container>
        <MiniPortfolioTitle>
          Nossa Senhora Achiropita
        </MiniPortfolioTitle>
        <Gallery
          photos={[
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita1.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita2.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita3.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita4.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita5.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita6.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita7.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita8.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita9.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita10.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita11.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita12.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita13.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita14.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita15.jpg'), width: 4, height: 3 
},
          ]}
        />
      </Container>
    </MiniPortfolio>

    <MiniPortfolio>
      <Container>
        <MiniPortfolioTitle>
          Chillibeans Pimenta
        </MiniPortfolioTitle>
        <Gallery
          photos={[
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/pimenta1.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/ChilliBeans3.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/pimenta2.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/ChilliBeans1.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/pimenta3.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/ChilliBeans2.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/ChilliBeans4.jpg'), width: 4, height: 3 
},
          ]}
        />
      </Container>
    </MiniPortfolio>

    <MiniPortfolio>
      <Container>
        <MiniPortfolioTitle>
          Forma Turismo
        </MiniPortfolioTitle>
        <Gallery
          photos={[
            {
 alt: 'teste', src: withPrefix('images/FormaTurismo/aw3d_forma1.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/FormaTurismo/aw3d_forma2.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/FormaTurismo/aw3d_forma3.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/FormaTurismo/aw3d_forma4.jpg'), width: 4, height: 3 
},
            {
 alt: 'teste', src: withPrefix('images/FormaTurismo/aw3d_forma5.jpg'), width: 4, height: 3 
},
          ]}
        />
      </Container>
    </MiniPortfolio>

  </SuccessCase>
);
