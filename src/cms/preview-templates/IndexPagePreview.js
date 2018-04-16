import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../pages';

const IndexPagePreview = ({ entry, widgetFor }) => {
  const entryBanners = entry.getIn(['data', 'banners']);
  const banners = entryBanners ? entryBanners.toJS() : [];

  const entryTestimonials = entry.getIn(['data', 'testimonials']);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  return (
    <IndexPageTemplate
      welcomeTitle={entry.getIn(['data', 'welcomeTitle'])}
      banners={banners}
      testimonials={testimonials}
      content={widgetFor('body')}
    />
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default IndexPagePreview;
