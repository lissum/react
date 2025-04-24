import React from 'react';
import './App.css';
import Listing from './components/Listing';
import items from './data/etsy.json';

const App: React.FC = () => {
    console.log( items );
    return (
        <div className="wrapper">
            <Listing items={items} />
        </div>
    );
};

export default App;