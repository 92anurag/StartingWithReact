import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home, About, Events, Products, Contact, Whoops404 } from './pages';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <div className="main" >
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/events" component={ Events } />
                <Route path="/products" component={ Products } />
                <Route path="/contact" component={ Contact } />
                <Route component={ Whoops404 } />
            </Switch>
        </div>
    </HashRouter>
    , document.getElementById( 'root' ) );
registerServiceWorker();
