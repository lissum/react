import React from 'react';

const Card = ( {title, image, children} ) => {
    return (
        <div className="card">
            {image && (
                <img
                    src={image}
                    className="card-img-top"
                    alt="Card cap"
                />
            )}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {children}
            </div>
        </div>
    );
};

export default Card;