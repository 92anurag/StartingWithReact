import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import Star from './Star';

const StarRating = ( { starsSelected = 0, totalStars = 5, onRate = f => f } ) => (
    <div className="star-rating">
        { [ ...Array( totalStars ) ].map( ( n, i ) =>
            <Star key={ v4() } selected={ i < starsSelected } onClick={ () => onRate( i + 1 ) } />,
        )}
        <p>{starsSelected} of {totalStars} stars</p>
    </div>
);

StarRating.propTypes = {
    starsSelected: PropTypes.number,
    totalStars: PropTypes.number,
    onRate: PropTypes.func,
};

StarRating.defaultProps = {
    starsSelected: 0,
    totalStars: 5,
    onRate: f => f,
};

export default StarRating;
