// ExpenseList.jsx
import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function ExpenseList({ expenses, handleDeleteExpense }) {
  

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id} // Keep the key prop if needed
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
          handleDeleteExpense={handleDeleteExpense}
        />
      ))}
    </ul>
  );
}
