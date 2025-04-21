import React from 'react';
import { addToCart } from "../js/functions";


const ShopItem = ( {id, name, price, color, img} ) => {
    return (
        <div className="shop-item">
            <img src={img} alt={name}/>
            <div className="details">
                <h3>{name}</h3>
                <p className="color">{color}</p>
            </div>
            <p className="price">${price}</p>
            <button onClick={event => addToCart( id )}>ADD TO CART</button>
        </div>
    );
};

export default ShopItem;