// import React from 'react';
import PropTypes from 'prop-types';

function Tooltip(props) {
  const { children, text } = props;

  return (
    <div className="tooltip-container">
      {children}
      <div className="tooltip">
        <span>{text}</span>
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tooltip;
