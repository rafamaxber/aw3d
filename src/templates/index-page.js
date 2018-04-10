import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';

const bannerImages = [
  {
    src: 'https://placehold.it/1600x500?text=banner%201',
    alt: '',
    id: 0,
  },
  {
    src: 'https://placehold.it/1600x500?text=banner%202',
    alt: '',
    id: 1,
  },
  {
    src: 'https://placehold.it/1600x500?text=banner%203',
    alt: '',
    id: 2,
  },
];

const IndexPageTemplate = ({
 image, title, heading, description 
}) => (
  <div className="homePage">
    <Banner images={bannerImages} />
    <Welcome />
  </div>
);

const IndexPage = ({ data }) => <IndexPageTemplate />;

export default IndexPage;
