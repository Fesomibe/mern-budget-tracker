const Budget = require('../../models/budget');

module.exports = {
    getAll,
    create,
    createExpense
};

async function getAll(req, res) {
    const budgets = await Budget.find({user: req.user._id});
    res.json(budgets);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const budget = await Budget.create(req.body);
    res.json(budget);
}

async function createExpense(req, res) {
    const budget = await Budget.findById(req.params.budgetId);
    budget.expenses.push(req.body);
    await budget.save();
    res.json(budget);
}