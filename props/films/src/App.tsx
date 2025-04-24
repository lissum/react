import React from 'react';
import MovieCard from './components/MovieCard';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <MovieCard
                image="https://placehold.co/600x400"
                category="action"
                title="Супермен"
                rating={3}
                price={1299}
            />
            <MovieCard
                image="https://placehold.co/600x400"
                category="western"
                title="Одинокий странник"
                rating={4}
                price={899}
            />
        </div>
    );
};

export default App;