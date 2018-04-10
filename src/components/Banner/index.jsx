import React from 'react';
import Slider from 'react-slick';
import { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  .bannerSlider {
    .slick-next,
    .slick-prev {
      z-index: 1;
    }
    .slick-prev {
      left: 2%;
    }
    .slick-next {
      right: 2%;
    }
  }
`;

const Component = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings} className="bannerSlider">
      {
        images.map(item => (
          <div className="bannerImage" key={item.id}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))
      }
    </Slider>
  );
};

Component.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
  })).isRequired,
};

export default Component;
