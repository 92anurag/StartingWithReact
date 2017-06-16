import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './components/StarRating';
import {StarRating as StarRating2} from './components/StarRatingAsES6Class';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<StarRating2 starsSelected={2} totalStars={5} />, document.getElementById('root'));
registerServiceWorker();
