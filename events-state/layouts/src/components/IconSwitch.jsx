import React from 'react';

const IconSwitch = ( {icon, onSwitch} ) => {
    return (
        <div className="icon-switch">
            <span
                className="material-icons"
                onClick={onSwitch}
            >
                {icon}
            </span>
        </div>
    );
};

export default IconSwitch;