import { Dispatcher } from 'flux';

export default class CountdownDispatcher extends Dispatcher {
    handleAction( action ) {
        // eslint-disable-next-line no-console
        console.log( 'dispatching action:', action );
        this.dispatch( {
            source: 'VIEW_ACTION',
            action,
        } );
    }
}
