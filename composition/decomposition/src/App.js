import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <NavBar />
        <SearchBar />
        <Banner />
        <MainContent />
      </div>
  );
}

export default App;