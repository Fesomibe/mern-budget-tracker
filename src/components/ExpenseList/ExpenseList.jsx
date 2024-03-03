import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function ExpenseList({ expenses, handleDeleteExpense }) {
  

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense._id}
          id={expense._id}
          name={expense.name}
          cost={expense.cost}
          handleDeleteExpense={handleDeleteExpense}
        />
      ))}
    </ul>
  );
}
