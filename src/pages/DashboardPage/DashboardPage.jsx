import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Budget from '../BudgetPage/BudgetPage';
import Remaining from '../../components/Remaining/Remaining';
import ExpenseTotal from '../../components/ExpenseTotal/ExpenseTotal';
import ExpenseList from '../../components/ExpenseList/ExpenseList';
import AddExpenseForm from '../../components/AddExpenseForm/AddExpenseForm';

export default function DashboardPage({budgets}) {
    const [selectedBudgetId, setSelectedBudgetId] = useState(budgets[0]?._id);
    const navigate = useNavigate();

    const budget = budgets.find(b => b._id === selectedBudgetId);
    if (!budget) return navigate('/budget/new');

    return (
        <div className='container'>
            <h1 className='mt-3'>My Budget Planner</h1>
            <select onChange={(evt) => setSelectedBudgetId(evt.target.value)} name="selectedBudget" value={selectedBudgetId}>
              {budgets.map(b => <option value={b._id} key={b._id}>{b.title}</option>)}
            </select>
            <div className='row mt-3'>
              <div className='col-sm'>
                <Budget budgetAmount={budget.budgetAmount}/>
              </div>
              <div className='col-sm'>
                <Remaining />
              </div>
              <div className='col-sm'>
                <ExpenseTotal totalExpenses={budget.totalExpenses} />
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
    )
}