import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as budgetsAPI from '../../utilities/budgets-api';

export default function NewBudgetPage({ budgets, handleAddBudget, setSelectedBudgetId }) {
  const [formData, setFormData] = useState({
    title: '',
    budgetAmount: ''
  });
  const [selectedBudget, setSelectedBudget] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (budgets.length > 0) {
      setSelectedBudget(budgets[0]._id);
    }
  }, [budgets]);

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newBudget = await budgetsAPI.addBudget(formData);
    handleAddBudget(newBudget);
    navigate('/dashboard');
  }

  function handleSelectBudget() {
    setSelectedBudgetId(selectedBudget)
    navigate('/dashboard')
  }

  return (
    <main>
      <h1>Add New Budget</h1>

      <div className="new-budget-form">
        <h2>Enter Budget Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Budget Name</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter budget name"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="budgetAmount">Total Budget</label>
            <input
              id="budgetAmount"
              name="budgetAmount"
              type="number"
              placeholder="Enter total budget"
              value={formData.budgetAmount}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Budget</button>
        </form>
      </div>

      {budgets.length > 0 && (
        <div className="existing-budgets">
          <h2>Select an Existing Budget</h2>
          <select
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
          >
            {budgets.map(budget => (
              <option key={budget._id} value={budget._id}>
                {budget.title}
              </option>
            ))}
          </select>
          <button onClick={handleSelectBudget}>
            View Selected Budget
          </button>
        </div>
      )}
    </main>
  );
}
