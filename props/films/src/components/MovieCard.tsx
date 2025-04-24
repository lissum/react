import React from 'react';
import Stars from './Stars';

interface MovieCardProps {
    image: string;
    category: string;
    title: string;
    rating: number;
    price: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ image, category, title, rating, price }) => {
    return (
        <div className="movie-card">
            <div className="movie-card-image-container">
                <img src={image} alt={title} className="movie-card-image" />
                <span className={`category-label ${category.toLowerCase()}`}>{category}</span>
            </div>
            <div className="movie-card-content">
                <div className="movie-card-header">
                    <h3 className="movie-card-title">{title}</h3>
                    <div className="movie-card-icons">
                        <span className="icon-heart">♥</span>
                        <span className="icon-share">↻</span>
                    </div>
                </div>
                <Stars count={rating} />
                <div className="movie-card-footer">
                    <button className="buy-button">КУПИТЬ {price}₽</button>
                    <a href="#" className="details-link">ПОДРОБНЕЕ →</a>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;