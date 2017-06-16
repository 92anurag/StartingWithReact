/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import AddColorForm from './components/AddColorForm';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

window.React = React;

const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`);
ReactDOM.render(<AddColorForm onNewColor={logColor} />, document.getElementById('root'));
registerServiceWorker();
