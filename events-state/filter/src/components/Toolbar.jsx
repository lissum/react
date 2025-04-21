import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
        <div className="toolbar">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => onSelectFilter(filter)}
                    className={selected === filter ? 'active' : ''}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default Toolbar;