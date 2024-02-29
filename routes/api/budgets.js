const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../../controllers/api/budgets');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/budgets'

// GET /api/budgets (get all budgets for user)
router.get('/', ensureLoggedIn, budgetsCtrl.getAll)

// POST /api/budgets 
router.post('/', ensureLoggedIn, budgetsCtrl.create)

module.exports = router;