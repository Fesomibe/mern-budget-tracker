import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = ({ id, name, cost }) => {
    return (
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        {name}
        <div>
          <span className='badge badge-primary badge-pill mr-3'>
          </span>
            ${cost}
          <TiDelete size='1.5em'></TiDelete>
        </div>
      </li>
    );
  };
  
  export default ExpenseItem;
  