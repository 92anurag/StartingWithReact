import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const target = document.getElementById('root');

ReactDOM.render(<Clock onClose={() => ReactDOM.unmountComponentAtNode(target)} />, target);
registerServiceWorker();
