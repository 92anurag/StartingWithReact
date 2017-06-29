import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRatingAsStatelessFunctionalComponent';
import { rateColor, removeColor } from '../actionCreators';
import '../stylesheets/Color.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Color extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        rating: PropTypes.number,
    }

    static defaultProps = {
        rating: 0,
    }

    static contextTypes = {
        store: PropTypes.shape( {
            dispatch: PropTypes.func.isRequired,
        } ).isRequired,
    }

    render() {
        const { id, title, color, rating } = this.props;
        const { store } = this.context;
        return (
            <section className="color" style={ this.style }>
                <h1 ref={ ( element ) => { this.titleHeading = element; } }> {title}</h1>
                <button onClick={ () => store.dispatch( removeColor( id ) ) }>X</button>
                <div className="color" style={ { backgroundColor: color } } />
                <div>
                    <StarRating
                        starsSelected={ rating }
                        onRate={ newRating => store.dispatch( rateColor( id, newRating ) ) }
                    />
                </div>
            </section>
        );
    }
}
