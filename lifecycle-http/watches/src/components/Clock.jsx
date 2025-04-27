import React, { useState, useEffect } from 'react';
import moment from 'moment';

function Clock({ id, name, offset, onRemove }) {
    const [time, setTime] = useState(moment().utcOffset(offset));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().utcOffset(offset));
        }, 1000);

        return () => clearInterval(interval);
    }, [offset]);

    return (
        <div className="clock">
            <h3>{name}</h3>
            <p>{time.format('HH:mm:ss')}</p>
            <button onClick={() => onRemove(id)}>×</button>
        </div>
    );
}

export default Clock;