import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/SortMenu.css';
import { sortColors } from '../actionCreators';

const options = {
    date: 'SORTED_BY_DATE',
    title: 'SORTED_BY_TITLE',
    rating: 'SORTED_BY_RATING',
};

const SortMenu = ( props, { store } ) => (
    <nav className="sortmenu">
        <h1>Sort Colors</h1>
        { Object.keys( options ).map( ( item, i ) => (
            /* eslint-disable jsx-a11y/href-no-hash */
            /* eslint-disable react/no-array-index-key */
            <a
                key={ i }
                href="#"
                className={ ( store.getState().sort === options[ item ] ) ? 'selected' : null }
                onClick={ ( e ) => {
                    e.preventDefault();
                    store.dispatch( sortColors( options[ item ] ) );
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

SortMenu.contextTypes = {
    store: PropTypes.shape( {
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
    } ).isRequired,
};

export default SortMenu;
