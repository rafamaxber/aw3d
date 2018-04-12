import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, widgetFor }) => {
  return (
    <IndexPageTemplate
      welcomeTitle={entry.getIn(['data', 'welcomeTitle'])}
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
