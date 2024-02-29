import React from 'react';

const ExpenseTotal = ({totalExpenses}) => {
	return (
		<div className='alert alert-primary'>
			<span>Spent so far: ${totalExpenses}</span>
		</div>
	);
};

export default ExpenseTotal;