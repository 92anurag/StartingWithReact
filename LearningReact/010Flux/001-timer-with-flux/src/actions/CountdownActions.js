const CountdownActions = dispatcher => (
    {
        tick( currentCount ) {
            dispatcher.handleAction( { type: 'TICK', currentCount } );
        },
        reset( count ) {
            dispatcher.handleAction( { type: 'RESET', count } );
        },
    }
);

export default CountdownActions;
