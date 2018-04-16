import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import Slider from 'react-slick';
import { Container, Title } from '../Shared';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  .testimonialsSlider {
    .slick-arrow {
      display: none!important;
    }
    margin-top: 30px;
    *:focus {
      outline: none;
    }
    .slick-slide {
      opacity: .4;
      transition: .5s ease;
      &.slick-active.slick-current {
        transition: .5s ease;
        opacity: 1;
      }
    }
  }
`;

const Wrapper = styled.div``;
const Article = styled.article`
  text-align: center;
`;
const Photo = styled.div`
  background-color: #f8d322;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
`;
const Image = styled.img`
  width: 40px;
`;

const MessageBody = styled.div`
  font-size: 2.2em;
  font-weight: lighter;
  margin: 0 auto 20px;;
  width: 80%;
`;
const Cite = styled.cite`
  font-size: 2em;
  font-weight: bold;
  font-style: normal;
`;
const Name = styled.div`
  font-size: 2em;
  font-style: normal;

`;

const Testimonials = ({ wrapperTestimonials }) => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Wrapper>
      <Title>
        <h2>{wrapperTestimonials.title}</h2>
      </Title>
      <Slider {...settings} className="testimonialsSlider">
        {
          wrapperTestimonials.testimonials.map(testimonial => (
            <Article key={testimonial.author}>
              <Photo>
                <Image src={testimonial.avatar} />
              </Photo>
              <MessageBody>
                {testimonial.quote}
              </MessageBody>
              <Cite>
                {testimonial.author}
              </Cite>
              <Name>
                {testimonial.name}
              </Name>
            </Article>
          ))
        }
      </Slider>
    </Wrapper>
  );
};

export default Testimonials;
