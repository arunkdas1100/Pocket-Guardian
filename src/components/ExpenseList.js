import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Expense List</h2>
      <ul className="space-y-2">
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between bg-gray-100 p-2 rounded">
            <span>{expense.name} - ₹{expense.amount} ({expense.category})</span>
            <button
              onClick={() => deleteExpense(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
