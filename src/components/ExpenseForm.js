import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(''); // New Category State

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && category) {
      addExpense({ name, amount: parseFloat(amount), category }); // Include category
      setName('');
      setAmount('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Expense</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Expense Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Expense Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Amount"
        />
      </div>
      <div className="mb-4">
          <select
            className="border p-2 rounded w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Loan">Loan</option>
            <option value="Transport">Transport</option>
            <option value="Rent">Rent</option>
            <option value="Utilities">Utilities</option>
            <option value="Others">Others</option>
           </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
