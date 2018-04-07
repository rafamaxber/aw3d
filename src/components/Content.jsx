import React from 'react';
import PropTypes from 'prop-types';

export const HTMLContent = ({ content, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: content }} // eslint-disable-line react/no-danger
  />
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.defaultProps = {
  content: '',
  className: '',
};

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
