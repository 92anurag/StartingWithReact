import { connect } from 'react-redux';

import AddColorForm from './AddColorForm';
import SortMenu from './SortMenu';
import ColorList from './ColorList';

import { addColor, sortColors, rateColor, removeColor } from '../actionCreators';
import { sortFunction } from '../lib/array-helpers';

const mapStateToProps = state => ( {
    colors: [ ...state.colors ].sort( sortFunction( state.sort ) ),
} );

const mapDispatchToProps = dispatch => ( {
    onRemove( id ) {
        dispatch( removeColor( id ) );
    },
    onRate( id, rating ) {
        dispatch( rateColor( id, rating ) );
    },
} );

export const Colors = connect(
    mapStateToProps,
    mapDispatchToProps,
)( ColorList );

export const NewColor = connect(
    null,
    dispatch => ( {
        onNewColor( title, color ) {
            dispatch( addColor( title, color ) );
        },
    } ),
)( AddColorForm );

export const Menu = connect(
    state => ( {
        sort: state.sort,
    } ),
    dispatch => ( {
        onSelect( sortBy ) {
            dispatch( sortColors( sortBy ) );
        },
    } ),
)( SortMenu );
