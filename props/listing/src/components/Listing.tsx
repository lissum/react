import React from 'react';
import Item from '../types/Item';

interface ListingProps {
    items: Item[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
    // Format title to max 50 characters with ellipsis if longer, handle undefined/null
    const formatTitle = (title: string | undefined): string => {
        if (!title || typeof title !== 'string') return 'Untitled';
        return title.length > 50 ? `${title.substring(0, 50)}…` : title;
    };

    // Format price based on currency code, handle undefined/null
    const formatPrice = (price: string | undefined, currencyCode: string | undefined): string => {
        if (!price || !currencyCode) return 'N/A';
        const formattedPrice = parseFloat(price).toFixed(2);
        switch (currencyCode) {
            case 'USD':
                return `$${formattedPrice}`;
            case 'EUR':
                return `€${formattedPrice}`;
            default:
                return `${formattedPrice} ${currencyCode}`;
        }
    };

    // Determine quantity class based on stock level, handle undefined/null
    const getQuantityClass = (quantity: number | undefined): string => {
        if (typeof quantity !== 'number') return 'level-low';
        if (quantity <= 10) return 'level-low';
        if (quantity <= 20) return 'level-medium';
        return 'level-high';
    };

    return (
        <div className="item-list">
            {items.map((item) => (
                <div key={item.listing_id} className="item">
                    <div className="item-image">
                        <a href={item.url || '#'}>
                            <img
                                src={item.MainImage?.url_570xN || 'https://via.placeholder.com/570xN'}
                                alt={item.title || 'No title'}
                            />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{formatTitle(item.title)}</p>
                        <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
                        <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>
                            {typeof item.quantity === 'number' ? `${item.quantity} left` : 'N/A'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Listing;