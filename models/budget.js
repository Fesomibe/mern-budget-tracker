const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    name: String, 
    cost: Number
}, {
    timestamps: true
});

const budgetSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    title: String,
    budgetAmount: Number,
    expenses: [expenseSchema]
}, {
    timestamps: true,
    toJSON: {virtuals: true}
});

budgetSchema.virtual('totalExpenses').get(function() {
    return this.expenses.reduce((total, expense) => total + expense.cost, 0);
});

budgetSchema.virtual('remainingBudget').get(function() {
    return this.budgetAmount - this.totalExpenses;
});

module.exports = mongoose.model('Budget', budgetSchema);