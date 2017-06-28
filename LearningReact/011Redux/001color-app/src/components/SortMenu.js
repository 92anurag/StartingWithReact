import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/SortMenu.css';
import { sortColors } from '../actionCreators';

const options = {
    date: 'SORTED_BY_DATE',
    title: 'SORTED_BY_TITLE',
    rating: 'SORTED_BY_RATING',
};

const SortMenu = ( { store } ) => (
    <nav className="sortmenu">
        <h1>Sort Colors</h1>
        { Object.keys( options ).map( ( item, i ) => (
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
           ),
        )}
    </nav>
);

SortMenu.propTypes = {
    store: PropTypes.shape( {
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
    } ).isRequired,
};

export default SortMenu;
