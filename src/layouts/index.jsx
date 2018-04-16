import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';
import { injectGlobal } from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Main } from '../components/Shared';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  *, *:after, *:before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }

  a {
    color: #6085F9;
    text-decoration: none;
  }

  body {
    font-family: 'Lato',
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen-Sans,
    "Helvetica Neue",
    sans-serif;
    background-color: #fbfbfb;
    color: #3a3a3a;
    font-size: 62.5%;
    @media (max-width: 768px) {
      font-size: 50%;
    }
    @media (max-width: 480px) {
      font-size: 45%;
    }
  }
`;

const storeUrl = 'https://www.aw3dshop.com.br/?utm_source=site_institucional';

const TemplateWrapper = ({ children, location }) => (
  <main className="main">
    <Helmet>
      <title>AW3D - A sua melhor impressão</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix('img/favicons/apple-touch-icon.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix('img/favicons/favicon-32x32.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix('img/favicons/favicon-16x16.png')}
      />
      <link
        rel="mask-icon"
        href={withPrefix('img/favicons/safari-pinned-tab.svg')}
        color="#f8d322"
      />
      <meta
        name="description"
        content="É com muito prazer que a AW3D lhe apresenta o mundo da Impressão 3D e pode acreditar, você não vai conseguir viver mais sem ele. No trabalho, na escola, em casa, a impressão 3D irá fazer cada vez mais mais parte do seu dia a dia."
      />

      <meta property="fb:admins" content="##FACEBOOK_ID##" />
      <meta property="og:url" content="https://aw3d.com.br/" />
      <meta property="og:type" content="page" />
      <meta property="og:title" content="AW3D - Impressão 3D" />
      <meta property="og:image" content="imagem do site (LINK ABSOLUTO)" />
      <meta
        property="og:description"
        content="É com muito prazer que a AW3D lhe apresenta o mundo da Impressão 3D e pode acreditar, você não vai conseguir viver mais sem ele. No trabalho, na escola, em casa, a impressão 3D irá fazer cada vez mais mais parte do seu dia a dia."
      />
      <meta property="og:site_name" content="AW3D" />

      <meta name="twitter:card" content="##LINK_DA_IMAGEM_LARGE##" />
      <meta name="twitter:site" content="@aw3d" />
      <meta
        name="twitter:title"
        content="AW3D - Bem vindo ao mundo da Impressão 3D"
      />
      <meta
        name="twitter:description"
        content="É com muito prazer que a AW3D lhe apresenta o mundo da Impressão 3D e pode acreditar, você não vai conseguir viver mais sem ele. No trabalho, na escola, em casa, a impressão 3D irá fazer cada vez mais mais parte do seu dia a dia."
      />
      <meta property="twitter:image:src" content="##LINK_DA_IMAGEM##" />

      <link rel="author" href="google plus do autor" />
      <meta itemProp="name" content="Título da página" />
      <meta
        itemProp="description"
        content="É com muito prazer que a AW3D lhe apresenta o mundo da Impressão 3D e pode acreditar, você não vai conseguir viver mais sem ele. No trabalho, na escola, em casa, a impressão 3D irá fazer cada vez mais mais parte do seu dia a dia."
      />
      <meta itemProp="image" content="imagem da página" />

      <meta name="msapplication-TileColor" content="#f8d322" />
      <meta name="theme-color" content="#f8d322" />
      <link rel="manifest" href={withPrefix('manifest.json')} />
    </Helmet>
    <Header isHomepage={location.pathname === withPrefix('/')} storeUrl={storeUrl} />
    <Main>{children()}</Main>
    <Footer />
  </main>
);

TemplateWrapper.defaultProps = {
  children: () => <div>empty</div>,
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
