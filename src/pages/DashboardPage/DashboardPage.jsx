import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Budget from '../BudgetPage/BudgetPage';
import Remaining from '../../components/Remaining/Remaining';
import ExpenseTotal from '../../components/ExpenseTotal/ExpenseTotal';
import ExpenseList from '../../components/ExpenseList/ExpenseList';
import AddExpenseForm from '../../components/AddExpenseForm/AddExpenseForm';

export default function DashboardPage({ budgets }) {
  const [selectedBudgetId, setSelectedBudgetId] = useState(budgets[0]?._id);
  const [expenses, setExpenses] = useState([
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
    { id: 14, name: 'car service', cost: 50 },
  ]);

  const navigate = useNavigate();

  const budget = budgets.find((b) => b._id === selectedBudgetId);
  if (!budget) return navigate('/budget/new');

  const handleAddExpense = (newExpense) => {
    console.log('Adding new expense:', newExpense);
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const handleDeleteExpense = (expenseId) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  return (
    <div className='container'>
      <h1 className='mt-3'>My Budget Planner</h1>
      <select
        onChange={(evt) => setSelectedBudgetId(evt.target.value)}
        name='selectedBudget'
        value={selectedBudgetId}
      >
        {budgets.map((b) => (
          <option value={b._id} key={b._id}>
            {b.title}
          </option>
        ))}
      </select>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget budgetAmount={budget.budgetAmount} />
        </div>
        <div className='col-sm'>
          <Remaining budgetRemaining={budget.budgetRemaining} />
        </div>
        <div className='col-sm'>
          <ExpenseTotal totalExpenses={budget.totalExpenses} />
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
          />
        </div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenseForm onAddExpense={handleAddExpense} />
        </div>
      </div>
    </div>
  );
}
