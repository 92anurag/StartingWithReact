import { EventEmitter } from 'events';

export default class CountdownStore extends EventEmitter {
    constructor( count = 5, dispatcher ) {
        super();
        // eslint-disable-next-line no-underscore-dangle
        this._count = count;
        this.dispatcherIndex = dispatcher.register( this.dispatch.bind( this ) );
    }

    get count() {
        // eslint-disable-next-line no-underscore-dangle
        return this._count;
    }

    dispatch( payload ) {
        const { type, count } = payload.action;
        switch ( type ) {
        case 'TICK':
        // eslint-disable-next-line no-underscore-dangle
            this._count = this._count - 1;
            this.emit( 'TICK', this.count );
            return true;

        case 'RESET':
            // eslint-disable-next-line no-underscore-dangle
            this._count = count;
            // eslint-disable-next-line no-underscore-dangle
            this.emit( 'RESET', this._count );
            return true;

        default:
            return false;
        }
    }
}
