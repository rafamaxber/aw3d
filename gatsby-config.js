module.exports = {
  siteMetadata: {
    title: 'AW3D - Sua melhor impressão',
    author: 'AW3D',
    basePath: 'https://aw3d.com.br/',
    disqusShortname: 'rafael-5',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    /*{
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'UA-76627459-1',
        includeInDevelopment: false,
        gtmPreview: 'aw3d',
      },
    },*/
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};
