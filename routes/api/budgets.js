const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../../controllers/api/budgets');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/budgets'