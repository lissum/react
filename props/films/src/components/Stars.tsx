import React from 'react';

interface StarProps {
}

const Star: React.FC<StarProps> = () => {
    return (
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
            <path d="M0 0h18v18H0z" fill="none"/>
        </svg>
    );
};

interface StarsProps {
    count?: number;
}

const Stars: React.FC<StarsProps> = ({count = 0}) => {
    if (typeof count !== 'number' || count < 1 || count > 5) {
        return null;
    }

    const starsArray = Array.from({length: count}, (_, index) => (
        <li key={index}>
            <Star/>
        </li>
    ));

    return (
        <ul className="card-body-stars u-clearfix">
            {starsArray}
        </ul>
    );
};

export default Stars;