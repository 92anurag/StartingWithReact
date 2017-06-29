import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/SortMenu.css';

const options = {
    date: 'SORTED_BY_DATE',
    title: 'SORTED_BY_TITLE',
    rating: 'SORTED_BY_RATING',
};

const SortMenu = ( { sort, onSelect } ) => (
    <nav className="sortmenu">
        <h1>Sort Colors</h1>
        { Object.keys( options ).map( ( item, i ) => (
            /* eslint-disable jsx-a11y/href-no-hash */
            /* eslint-disable react/no-array-index-key */
            <a
                key={ i }
                href="#"
                className={ ( sort === options[ item ] ) ? 'selected' : null }
                onClick={ ( e ) => {
                    e.preventDefault();
                    onSelect( options[ item ] );
                } }
            >
                {item}
            </a>
            /* eslint-enable jsx-a11y/href-no-hash */
            /* eslint-enable react/no-array-index-key */
           ),
        )}
    </nav>
);

SortMenu.propTypes = {
    sort: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

SortMenu.defaultProps = {
    sort: options.date,
    onSelect: f => f,
};

export default SortMenu;
