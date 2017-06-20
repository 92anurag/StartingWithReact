import React from 'react';
import ReactDOM from 'react-dom';

import CountdownDispatcher from './dispatchers/CountdownDispatcher';
import CountdownActions from './actions/CountdownActions';
import Countdown from './components/Countdown';
import CountdownStore from './stores/CountdownStore';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const appDispatcher = new CountdownDispatcher();
const actions = CountdownActions( appDispatcher );
const store = new CountdownStore( 10, appDispatcher );

const render = ( count ) => {
    ReactDOM.render(
        <Countdown count={ count } { ...actions } />,
        document.getElementById( 'root' ),
    );
};

const rerender = () => render( store.count );

store.on( 'TICK', rerender );
store.on( 'RESET', rerender );
rerender();

registerServiceWorker();
