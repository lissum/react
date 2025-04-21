import React from 'react';
import ShopItem from "./ShopItem";

const ListView = ( {items} ) => {
    return (
        <div className="list-view">
            {items.map( ( product, index ) => (
                <ShopItem key={index} {...product} />
            ) )}
        </div>
    );
};

export default ListView;