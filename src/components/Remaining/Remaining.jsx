import React from 'react';

export default function Remaining({remainingBudget}) {
	return (
		<div className='alert alert-success'>
			<span>Remaining: ${remainingBudget}</span>
		</div>
	);
}