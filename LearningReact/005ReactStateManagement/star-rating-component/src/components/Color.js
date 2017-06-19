import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRatingAsStatelessFunctionalComponent';
import '../stylesheets/Color.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Color extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        rating: PropTypes.number,
        onRemove: PropTypes.func,
        onRate: PropTypes.func,
    }

    static defaultProps = {
        rating: 0,
        onRemove: f => f,
        onRate: f => f,
    }

    componentWillMount() {
        this.style = { backgroundColor: '#CCC' };
    }

    shouldComponentUpdate( nextProps ) {
        const { rating } = this.props;
        return rating !== nextProps.rating;
    }

    componentWillUpdate( nextProps ) {
        const { title, rating } = this.props;
        this.style = null;
        this.titleHeading.style.backgroundColor = 'red';
        this.titleHeading.style.color = 'white';
        // eslint-disable-next-line no-alert
        alert( `${ title }: rating ${ rating } -> ${ nextProps.rating }` );
    }

    componentDidUpdate() {
        this.titleHeading.style.backgroundColor = '';
        this.titleHeading.style.color = 'black';
    }

    render() {
        const { title, color, rating, onRemove, onRate } = this.props;
        return (
            <section className="color" style={ this.style }>
                <h1 ref={ ( element ) => { this.titleHeading = element; } }> {title}</h1>
                <button onClick={ onRemove }>X</button>
                <div className="color" style={ { backgroundColor: color } } />
                <div>
                    <StarRating starsSelected={ rating } onRate={ onRate } />
                </div>
            </section>
        );
    }
}
