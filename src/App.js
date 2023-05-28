import './styles/App.css';
import { useState } from 'react';
import CocktailsList from './components/cocktailsList/cocktailsList';
import Searches from './components/search/searches';
import About from './components/about';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <About />
      <Header />
      <Searches />

      <div className="cocktails-list">
        <CocktailsList />
      </div>
    </div>
  );
}

export default App;
