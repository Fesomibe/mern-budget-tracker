import React from 'react';

export default function Remaining({budgetRemaining}) {
	return (
		<div className='alert alert-success'>
			<span>Remaining: ${budgetRemaining}</span>
		</div>
	);
}