import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './components/StarRating'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<StarRating totalStars={5} />, document.getElementById('root'));
registerServiceWorker();
