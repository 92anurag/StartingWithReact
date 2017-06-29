import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';
import '../stylesheets/ColorList.css';
import { sortFunction } from '../lib/array-helpers';

const ColorList = ( props, { store } ) => {
    const { colors, sort } = store.getState();
    const sortedColors = [ ...colors ].sort( sortFunction( sort ) );
    return (
        <div className="color-list">
            {( colors.length === 0 ) ?
                <p> No Colors Listed. (Add a color) </p> :
                    sortedColors.map( color =>
                        ( <Color
                            key={ color.id }
                            { ...color }
                        /> ),
                    )
                }
        </div>
    );
};

ColorList.contextTypes = {
    store: PropTypes.shape( {
        getState: PropTypes.func.isRequired,
    } ).isRequired,
};

export default ColorList;
