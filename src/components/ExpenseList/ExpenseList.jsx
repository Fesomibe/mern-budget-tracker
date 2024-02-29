import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
          onDeleteExpense={onDeleteExpense}
        />
      ))}
    </ul>
  );
};