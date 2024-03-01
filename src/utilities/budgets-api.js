import sendRequest from "./send-request";
const BASE_URL = '/api/budgets';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function addBudget(budgetData) {
  return sendRequest(BASE_URL, 'POST', budgetData);
}

export function addExpense(newExpense, budgetId) {
  return sendRequest(`${BASE_URL}/${budgetId}/expenses`, 'POST', newExpense);
}

export function deleteExpense(budgetId, expenseId) {
  console.log(budgetId, expenseId)
  return sendRequest(`${BASE_URL}/${budgetId}/expenses/${expenseId}`, 'DELETE');
}