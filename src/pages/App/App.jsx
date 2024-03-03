import React, { useState, useEffect } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as budgetsAPI from '../../utilities/budgets-api';
import AuthPage from '../AuthPage/AuthPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useParams } from 'react-router-dom';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/NavBar/NavBar';
import BudgetPage from '../BudgetPage/BudgetPage';
import NewBudgetPage from '../NewBudgetPage/NewBudgetPage';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [budgets, setBudgets] = useState([]);
    const [selectedBudgetId, setSelectedBudgetId] = useState(budgets.length && budgets[0]?._id);

  const {budgetId} = useParams();
  const budget = budgets && budgets.find(b=>b._id === selectedBudgetId)
  console.log(budget)
  useEffect(() => {
    async function getAllBudgets() {
      
      if (user) {
        const allBudgets = await budgetsAPI.getAll()
        setBudgets(allBudgets)
        setSelectedBudgetId(allBudgets[0]?._id)
      } else {
        setBudgets([]);
      }
    }
    getAllBudgets()
  }, [user]);

  function handleAddBudget(newBudget) {
    setBudgets([newBudget, ...budgets]);
  }

  function handleAddExpense(updatedBudget) {
    const updatedBudgets = budgets.map(b => (b._id === updatedBudget._id ? updatedBudget : b));
    setBudgets(updatedBudgets);
  }

  async function handleDeleteExpense(expenseId) {
    console.log(expenseId)
    const updatedBudget = await budgetsAPI.deleteExpense(selectedBudgetId, expenseId);
    const updatedBudgets = budgets.map(b => b._id === updatedBudget._id ? updatedBudget : b);
    setBudgets(updatedBudgets);
  }

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {user ? (
          <>
            <Route
              path="/budget/new"
              element={<NewBudgetPage budgets={budgets} handleAddBudget={handleAddBudget} setSelectedBudgetId={setSelectedBudgetId} />}
            />
            <Route path="/budget" element={<BudgetPage />} />
            <Route
              path="/dashboard"
              element={<DashboardPage budgets={budgets} handleAddExpense={handleAddExpense} handleDeleteExpense={handleDeleteExpense} selectedBudgetId={selectedBudgetId} setSelectedBudgetId={setSelectedBudgetId} />}
            />
          </>
        ) : (
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
        )}
      </Routes>
    </main>
  );
}
