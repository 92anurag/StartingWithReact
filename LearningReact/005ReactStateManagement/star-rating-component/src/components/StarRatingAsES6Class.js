import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Star from './Star';

export default class StarRating extends React.Component {
    static defaultProps = {
        totalStars: 5,
        starsSelected: 0,
    }

    static propTypes = {
        totalStars: PropTypes.number,
        starsSelected: PropTypes.number,
    }

    constructor( props ) {
        super( props );
        this.state = {
            starsSelected: props.starsSelected || 0,
        };

        this.change = this.change.bind( this );
    }

    change( starsSelected ) {
        this.setState( { starsSelected } );
    }

    render() {
        const { totalStars } = this.props;
        const { starsSelected } = this.state;

        return (
            <div className="star-rating">
                { [ ...Array( totalStars ) ].map( ( n, i ) =>
                    <Star key={ v4() } selected={ i < starsSelected } onClick={ () => this.change( i + 1 ) } />,
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        );
    }
}
