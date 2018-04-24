import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../pages';

const IndexPagePreview = ({ entry, widgetFor }) => {
  const entryBanners = entry.getIn(['data', 'banners']);
  const banners = entryBanners ? entryBanners.toJS() : [];

  const entryMiniPortfolio = entry.getIn(['data', 'miniPortfolio', 'images']);
  const miniPortfolio = entryMiniPortfolio ? entryMiniPortfolio.toJS() : [];

  const entryTestimonials = entry.getIn(['data', 'wrapperTestimonials', 'testimonials']);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  return (
    <IndexPageTemplate
      welcomeTitle={entry.getIn(['data', 'welcomeTitle'])}
      banners={banners}
      wrapperTestimonials={{
        title: entry.getIn(['data', 'wrapperTestimonials', 'title']),
        testimonials,
      }}
      miniPortfolio={{
        title: entry.getIn(['data', 'miniPortfolio', 'title']),
        images: miniPortfolio,
      }}
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
