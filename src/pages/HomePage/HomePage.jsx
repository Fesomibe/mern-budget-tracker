import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to BudgetBuddy 💰📊</h1>
      <p>Manage your finances with ease and stay on top of your budgets.</p>
      <Link to="/auth">
        <button className="cta-button">Get Started</button>
      </Link>
    </div>
  );
}
