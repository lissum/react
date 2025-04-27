import React from 'react';
import Clock from './Clock';

function ClockList({ clocks, onRemove }) {
    return (
        <div className="clock-list">
            {clocks.map(clock => (
                <Clock
                    key={clock.id}
                    id={clock.id}
                    name={clock.name}
                    offset={clock.offset}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
}

export default ClockList;