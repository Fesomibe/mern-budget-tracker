import React, { useState } from 'react';

export default function AddExpenseForm({ onAddExpense }) {
  const [expense, setExpense] = useState({
    name: '',
    cost: '',
  });

  const handleChange = (evt) => {
    setExpense({
      ...expense,
      [evt.target.id]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddExpense(expense);
  
    // Reset the form
    setExpense({
      name: '',
      cost: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-sm'>
          <label htmlFor='name' style={{ color: '#333' }}>Name</label>
          <input
            required
            type='text'
            className='form-control'
            id='name'
            value={expense.name}
            onChange={handleChange}
          />
        </div>
        <div className='col-sm'>
          <label htmlFor='cost' style={{ color: '#333' }}>Cost</label>
          <input
            required
            type='text'
            className='form-control'
            id='cost'
            value={expense.cost}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary mt-3'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};