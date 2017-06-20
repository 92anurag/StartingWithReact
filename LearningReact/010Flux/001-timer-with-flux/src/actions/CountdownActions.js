const CountdownActions = dispatcher => (
    {
        tick( currentCount ) {
            dispatcher.handleAction( { type: 'TICK', count: currentCount } );
        },
        reset( count ) {
            dispatcher.handleAction( { type: 'RESET', count } );
        },
    }
);

export default CountdownActions;
