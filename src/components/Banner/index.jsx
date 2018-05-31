import React from 'react';
import Slider from 'react-slick';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from '../../img/next.svg';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  .bannerSlider {
    max-width: 1400px;
    margin: 20px auto 0;
    @media (max-width: 768px) {
      margin-top: 0px;
    }
    .bannerImage--img {
      margin: auto;
    }
    .slick-dots {
      bottom: 15px;
    }
    .slick-dots li {
      width: 10px;
    }
    .slick-dots li button:before {
      font-size: 15px;
      color: #fff;
    }
    .slick-dots li.slick-active button:before {
      color: #fff;
      opacity: .8
    }
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

const ArrowImage = styled.img`
  width: 20px;
`;
const NextArrow = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 20px;
  right: 2%;
`;
const PrevArrow = styled.div`
  left: 2%;
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 20px;
  transform: rotate(180deg);
`;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <NextArrow onClick={onClick}>
      <ArrowImage src={Arrow} />
    </NextArrow>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <PrevArrow onClick={onClick}>
      <ArrowImage src={Arrow} />
    </PrevArrow>
  );
};

const Component = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className="bannerSlider">
      {images.map(item => (
        <div className="bannerImage" key={item.id}>
          <img className="bannerImage--img" src={item.src} alt={item.alt} />
        </div>
      ))}
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
