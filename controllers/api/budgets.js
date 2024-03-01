const Budget = require('../../models/budget');

module.exports = {
    getAll,
    create,
    createExpense,
    deleteExpense
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

async function deleteExpense(req, res) {
    console.log(req.user._id)
    try {
        const budget = await Budget.findOne({
            user: req.user._id,
            _id: req.params.budgetId
        });
        console.log(budget)
        if (!budget) return res.status(401).json('unauthorized')
        budget.expenses.remove(req.params.expenseId)
        await budget.save();
        res.json(budget);
    } catch (error) {
        console.error('Error deleting expense:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}