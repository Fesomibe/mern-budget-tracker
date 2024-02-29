import React from 'react';
import { TiDelete } from 'react-icons/ti';

export default function ExpenseItem({ id, name, cost, onDeleteExpense }) {
  const handleDelete = () => {
    onDeleteExpense(id);
  };

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {name}
      <div>
        <span className='badge badge-primary badge-pill mr-3'></span>${cost}
        <TiDelete size='1.5em' onClick={handleDelete}></TiDelete>
      </div>
    </li>
  );
};