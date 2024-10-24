import React from 'react';

const MonthlySummary = ({ expenses }) => {
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="text-white text-lg">
      <strong>Total Spent:</strong> ₹{totalAmount.toFixed(2)}
    </div>
  );
};

export default MonthlySummary;
