import React from 'react';

export default function ExpenseTotal({totalExpenses}) {
	return (
		<div className='alert alert-primary'>
			<span>Spent so far: ${totalExpenses}</span>
		</div>
	);
}