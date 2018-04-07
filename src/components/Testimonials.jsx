import React from 'react';
import PropTypes from 'prop-types';

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

Testimonials.defaultProps = {
  testimonials: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string,
    author: PropTypes.string,
  })),
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string,
    author: PropTypes.string,
  })),
};

export default Testimonials;
