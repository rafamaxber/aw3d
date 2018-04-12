import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../pages/index';

const IndexPagePreview = ({ entry, widgetFor }) => {
  const entryBanners = entry.getIn(['data', 'banners']);
  const banners = entryBanners ? entryBanners.toJS() : [];

  return (
    <IndexPageTemplate
      banners={banners}
      welcomeTitle={entry.getIn(['data', 'welcomeTitle'])}
      welcomeHtml={widgetFor('welcomeHtml')}
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
