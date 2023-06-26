import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import CharactersPage from './pages/charactersPage';
import FightPage from './pages/fightPage';

function App() {
  return (
    <div className='layout'>
      <header></header>
      <main>
        <Router>
          <Routes>
            <Route  path="characters" Component={CharactersPage} />
            <Route  path="fight" Component={FightPage} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
