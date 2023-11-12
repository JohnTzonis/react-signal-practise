// import React from 'react';
import PropTypes from 'prop-types';

function Tooltip(props) {
    // needs improvements
    const { children, text } = props;

    return (
        <div>
        {children}
        <div className="">
            <span className="bg-white">{text}</span>
        </div>
        </div>
    );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tooltip;
