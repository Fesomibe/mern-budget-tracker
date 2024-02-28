import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/NavBar/NavBar';
import BudgetPage from '../../components/Budget/Budget';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {user ? (
			<>
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
