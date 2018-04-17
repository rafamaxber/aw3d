import React from 'react';
import PropTypes from 'prop-types';
import { PortfolioPagePreview } from '../../templates/portfolio-page';

const PortfolioPagePreview = ({ entry, widgetFor }) => (
  <PortfolioPagePreview
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

PortfolioPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PortfolioPagePreview;
