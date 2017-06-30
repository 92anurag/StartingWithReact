import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from './MainMenu';

const PageTemplate = ( { children } ) => (
    <div className="page" >
        <MainMenu />
        { children }
    </div>
);

PageTemplate.propTypes = {
    children: PropTypes.shape().isRequired,
};

export default PageTemplate;
