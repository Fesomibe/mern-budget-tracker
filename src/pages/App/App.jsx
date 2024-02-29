import { useState, useEffect } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as budgetsAPI from '../../utilities/budgets-api';
import AuthPage from '../AuthPage/AuthPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/NavBar/NavBar';
import BudgetPage from '../BudgetPage/BudgetPage';
import NewBudgetPage from '../NewBudgetPage/NewBudgetPage';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [budgets, setBudgets] = useState([]);

  useEffect(function() {
	if (user) {
		budgetsAPI.getAll().then(budgets => setBudgets(budgets));
	} else {
		setBudgets([]);
	}
  }, [user]);

  function handleAddBudget(newBudget) {
	setBudgets([newBudget, ...budgets]);
  }

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {user ? (
			<>
				<Route path='/budget/new' element={<NewBudgetPage budgets={budgets} handleAddBudget={handleAddBudget} />} />
				<Route path='/budget' element={<BudgetPage />} />
				<Route path='/dashboard' element={<DashboardPage />} />
			</>
        ) : (
          <Route path='/auth' element={<AuthPage setUser={setUser} />} />
        )}
      </Routes>
    </main>
  );
}
