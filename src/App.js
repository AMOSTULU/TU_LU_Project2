import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import RulesPage from './components/RulesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </Router>
  );
}

export default App;