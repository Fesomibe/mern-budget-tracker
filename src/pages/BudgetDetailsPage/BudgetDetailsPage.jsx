import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardPage from '../DashboardPage/DashboardPage';

export default function BudgetDetailsPage() {
  const { budgetId } = useParams();

  // Fetch and display details for the budget with ID = budgetId

  return (
    <div>
      {/* Display budget details here */}
      <h1>Budget Details for ID: {budgetId}</h1>
      <DashboardPage />
    </div>
  );
}
