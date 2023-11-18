import React from 'react';
import { Link } from 'react-router-dom';
import '../demo.css';

function RulesPage() {
  return (
    <div className="container">
      <h1 className="title">Rules of the game</h1>
      <p className="text">In Wordle, the game secretly chooses a random word that the user will try to guess within a 
certain number of attempts. Both the length of the word and the number of attempts are based 
on the difficulty selected by the user.</p>
      <Link className="nav-link" to="/">Back to Home</Link>
    </div>
  );
}

export default RulesPage;