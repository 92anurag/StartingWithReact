/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddColorForm from './components/AddColorForm';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

window.React = React;

ReactDOM.render(<AddColorForm />, document.getElementById('root'));
registerServiceWorker();
