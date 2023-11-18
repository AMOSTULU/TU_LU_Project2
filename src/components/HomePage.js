import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../demo.css';

function HomePage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  return (
    <div className="container">
      <h1 className="title">Welcome to Wordle</h1>
      <p className="prompt">Select the difficulty:</p>
      <div className="button-container">
        <button 
          className={`difficulty-button ${selectedDifficulty === 'Easy' ? 'selected' : ''}`} 
          onClick={() => setSelectedDifficulty('Easy')}
        >
          Easy
        </button>
        <button 
          className={`difficulty-button ${selectedDifficulty === 'Medium' ? 'selected' : ''}`} 
          onClick={() => setSelectedDifficulty('Medium')}
        >
          Medium
        </button>
        <button 
          className={`difficulty-button ${selectedDifficulty === 'Hard' ? 'selected' : ''}`} 
          onClick={() => setSelectedDifficulty('Hard')}
        >
          Hard
        </button>
      </div>
      <Link className="nav-link" to="/game">Start Game</Link>
      <Link className="nav-link" to="/rules">See Rules</Link>
    </div>
  );
}

export default HomePage;