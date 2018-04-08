import React from 'react'
import Link, {withPrefix} from 'gatsby-link'
import styled, {injectGlobal} from 'styled-components'

import { Container, Title } from '../Shared'
import Gallery from '../PortfolioLightbox'

injectGlobal`
  .react-photo-gallery--gallery img {
    transition: ease .3s;
  }
  .react-photo-gallery--gallery img:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px -10px #8a8a8a;
  }
`

const SuccessCase = styled.section`
  margin-bottom: 40px;
`
const MiniPortfolio = styled.div`
  margin-bottom: 100px;
`
const GoToLink = styled(Link)`
  float: right;
  margin: 20px 0;
  font-size: 1.4em;
  color: #6085f9;
  text-transform: lowercase;
  font-weight: bold;
`
const MiniPortfolioTitle = styled.h3`
  font-size: 2.3em;
  font-weight: 700;
  margin: 20px 0;
`

export const ComponentMiniPortfolio = () => (
  <SuccessCase id="portfolio">
    <Title className="success-case-title">
      <h2>Conheça nossos projetos</h2>
    </Title>
    <MiniPortfolio>
      <Container>
        <MiniPortfolioTitle>
          Chillibeans Caveira
        </MiniPortfolioTitle>
        <Gallery
          photos={[
            { alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/IMG_0971.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/IMG_0972.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/20180124_114859.jpg'), width: 4, height: 3 },
          ]}
        />
        <GoToLink to="/portfolio">Ver mais</GoToLink>
      </Container>
    </MiniPortfolio>

    <MiniPortfolio>
      <Container>
        <MiniPortfolioTitle>
          Nossa Senhora Achiropita
        </MiniPortfolioTitle>
        <Gallery
          photos={[
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita2.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita5.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita13.jpg'), width: 4, height: 3 },
          ]}
        />
        <GoToLink to="/portfolio">Ver mais</GoToLink>
      </Container>
    </MiniPortfolio>
  </SuccessCase>
)

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
            { alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/20180124_114859.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/20180124_115325.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/IMG_0971.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/IMG_0972.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Caveira/IMG_0980.jpg'), width: 4, height: 3 },
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
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita1.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita2.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita3.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita4.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita5.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita6.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita7.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita8.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita9.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita10.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita11.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita12.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita13.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita14.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Achiropita/aw3d_achiropita15.jpg'), width: 4, height: 3 },
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
            { alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/pimenta1.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/ChilliBeans3.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/pimenta2.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/ChilliBeans1.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/pimenta3.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/ChilliBeans2.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/Chillibeans/Pimenta/ChilliBeans4.jpg'), width: 4, height: 3 },
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
            { alt: 'teste', src: withPrefix('images/FormaTurismo/aw3d_forma1.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/FormaTurismo/aw3d_forma2.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/FormaTurismo/aw3d_forma3.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/FormaTurismo/aw3d_forma4.jpg'), width: 4, height: 3 },
            { alt: 'teste', src: withPrefix('images/FormaTurismo/aw3d_forma5.jpg'), width: 4, height: 3 },
          ]}
        />
      </Container>
    </MiniPortfolio>

  </SuccessCase>
)
