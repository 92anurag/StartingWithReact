import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';
import '../stylesheets/ColorList.css';
import { rateColor, removeColor } from '../actionCreators';
import { sortFunction } from '../lib/array-helpers';

const ColorList = ( { store } ) => {
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
                            onRate={ rating => store.dispatch( rateColor( color.id, rating ) ) }
                            onRemove={ () => store.dispatch( removeColor( color.id ) ) }
                        /> ),
                    )
                }
        </div>
    );
};

ColorList.propTypes = {
    store: PropTypes.shape( {
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
    } ).isRequired,
};

export default ColorList;
