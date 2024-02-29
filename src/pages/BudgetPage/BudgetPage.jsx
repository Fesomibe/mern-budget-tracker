import React from 'react';

export default function BudgetPage({budgetAmount}) {
	return (
		<div className='alert alert-secondary'>
			<span>Budget: ${budgetAmount}</span>
		</div>
	);
}