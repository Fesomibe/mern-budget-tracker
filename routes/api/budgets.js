const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../../controllers/api/budgets');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/budgets'

// GET /api/budgets (get all budgets for user)
router.get('/', ensureLoggedIn, budgetsCtrl.getAll)

// POST /api/budgets 
router.post('/', ensureLoggedIn, budgetsCtrl.create)

// POST /api/budgets/:budgetId/expenses
router.post('/:budgetId/expenses', ensureLoggedIn, budgetsCtrl.createExpense)

// DELETE /api/budgets/:budgetId/expenses
router.delete('/:budgetId/expenses/:expenseId', ensureLoggedIn, budgetsCtrl.deleteExpense);

module.exports = router;