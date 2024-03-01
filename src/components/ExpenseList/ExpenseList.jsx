// ExpenseList.jsx
import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function ExpenseList({ expenses, handleDeleteExpense }) {
  

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense._id} // Keep the key prop if needed
          id={expense._id}
          name={expense.name}
          cost={expense.cost}
          handleDeleteExpense={handleDeleteExpense}
        />
      ))}
    </ul>
  );
}
