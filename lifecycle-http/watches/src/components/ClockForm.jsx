import React, { useState } from 'react';

function ClockForm( {onAdd} ) {
    const [name, setName]     = useState( '' );
    const [offset, setOffset] = useState( '' );

    const handleSubmit = () => {
        if ( name && offset ) {
            onAdd( name, offset );
            setName( '' );
            setOffset( '' );
        }
    };

    return (
        <div className="clock-form">
            <input
                type="text"
                placeholder="Название"
                value={name}
                onChange={( e ) => setName( e.target.value )}
            />
            <input
                type="number"
                placeholder="Временная зона (смещение от UTC)"
                value={offset}
                onChange={( e ) => setOffset( e.target.value )}
            />
            <button onClick={handleSubmit}>Добавить</button>
        </div>
    );
}

export default ClockForm;