import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, widgetFor }) => {
  const entryBanners = entry.getIn(['data', 'banners']);
  const banners = entryBanners ? entryBanners.toJS() : [];

  return (
    <IndexPageTemplate
      banners={banners}
      welcomeTitle={entry.getIn(['data', 'welcomeTitle'])}
      welcomeHtml={widgetFor('body')}
    />
  );
};

export default IndexPagePreview;
