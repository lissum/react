import React from 'react';
import ShopCard from "./ShopCard";

const CardsView = ( {cards} ) => {
    return (
        <div className="cards-view">
            {cards.map( ( product, index ) => (
                <ShopCard key={index} {...product} />
            ) )}
        </div>
    );
};

export default CardsView;