import PropTypes from 'prop-types';
import React from 'react';
import '../stylesheets/Star.css';

const Star = ( { selected = false, onClick = f => f } ) => (
    <div className={ ( selected ) ? 'star selected' : 'star' } onClick={ onClick } role="button" tabIndex="0" />
);

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

Star.defaultProps = {
    selected: false,
    onClick: f => f,
};

export default Star;
