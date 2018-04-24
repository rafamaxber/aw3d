import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../pages';

const IndexPagePreview = ({ entry, widgetFor }) => {
  const entryBanners = entry.getIn(['data', 'banners']);
  const banners = entryBanners ? entryBanners.toJS() : [];

  const entryMiniPortfolio = entry.getIn(['data', 'miniPortfolio']);
  const miniPortfolio = entryMiniPortfolio ? entryMiniPortfolio.toJS() : [];

  const entryTestimonials = entry.getIn(['data', 'testimonials']);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  return (
    <IndexPageTemplate
      welcomeTitle={entry.getIn(['data', 'welcomeTitle'])}
      banners={banners}
      wrapperTestimonials={{
        title: entry.getIn(['data', 'title']),
        testimonials,
      }}
      miniPortfolio={{
        title: entry.getIn(['data', 'title']),
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
