import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css'; // Import your custom styles for the homepage

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Budget Tracker</h1>
      <p>Manage your finances with ease and stay on top of your budgets.</p>
      <Link to="/auth">
        <button className="cta-button">Get Started</button>
      </Link>
    </div>
  );
}
