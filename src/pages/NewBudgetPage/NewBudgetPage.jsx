import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import * as budgetsAPI from '../../utilities/budgets-api';

export default function NewBudgetPage({budgets, handleAddBudget}) {
    const [formData, setFormData] = useState({
        title: '',
        budgetAmount: ''
    });
    const navigate = useNavigate();

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        const newBudget = await budgetsAPI.addBudget(formData);
        handleAddBudget(newBudget);
        navigate('/dashboard');
    }
    
    const existingBudgets = budgets.map(budget => <div key={budget._id}>
        <p>{budget.title}</p>
        <p>${budget.budgetAmount}</p>
    </div>);
    
    return (
        <main>
            <h1>Add New Budget</h1>
            <h2>Existing Budgets</h2>
            {budgets.length ?
                existingBudgets
                :
                <p>You have no budgets yet</p>
            }
            <hr />
            <h2>Enter Budget Information</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="budget name" name="title" value={formData.title} onChange={handleChange} required />
                <input placeholder="total budget" type="number" name="budgetAmount" value={formData.budgetAmount} onChange={handleChange} required />
                <button type="submit" >Add Budget</button>
            </form>
        </main>
    );
}