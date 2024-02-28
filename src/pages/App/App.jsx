import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from '../../components/Budget/Budget';
import Remaining from '../../components/Remaining/Remaining';
import ExpenseTotal from '../../components/ExpenseTotal/ExpenseTotal';
import ExpenseList from '../../components/ExpenseList/ExpenseList';
import AddExpenseForm from '../../components/AddExpenseForm/AddExpenseForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ?
        <>
          <div className='container'>
            <h1 className='mt-3'>My Budget Planner</h1>
            <div className='row mt-3'>
              <div className='col-sm'>
                <Budget />
              </div>
              <div className='col-sm'>
                <Remaining />
              </div>
              <div className='col-sm'>
                <ExpenseTotal />
              </div>
            </div>
            <h3 className='mt-3'>Expenses</h3>
            <div className='row mt-3'>
              <div className='col-sm'>
                <ExpenseList />
              </div>
            </div>
			<h3 className='mt-3'>Add Expense</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
					<AddExpenseForm />
				</div>
			</div>
		</div>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
