import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import { Home, About, Events, Products, Contact } from './pages';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <div className="main" >
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/events" component={ Events } />
            <Route path="/products" component={ Products } />
            <Route path="/contact" component={ Contact } />
        </div>
    </HashRouter>
    , document.getElementById( 'root' ) );
registerServiceWorker();
