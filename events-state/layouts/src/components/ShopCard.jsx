import React from 'react';
import { addToCart } from "../js/functions";

const ShopCard = ( {id, name, price, color, img} ) => {
    return (
        <div className="shop-card">
            <h3>{name}</h3>
            <p className="color">{color}</p>
            <img src={img} alt={name}/>
            <p className="price">${price}</p>
            <button onClick={event => addToCart( id )}>ADD TO CART</button>
        </div>
    );
};

export default ShopCard;