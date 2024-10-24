import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const ExpenseInsights = ({ expenses }) => {
  const [insights, setInsights] = useState('No insights available.');
  const [loading, setLoading] = useState(false);  // For showing loading state
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const generateInsights = async () => {
    setLoading(true); // Start loading

    try {
      // Generate a summary of expenses
      const expenseSummary = getExpenseSummary(expenses);

      // Initialize Google Generative AI with the API key
      const genAI = new GoogleGenerativeAI('AIzaSyCoax7u0MmNt4aNsv3oWeSxociT66zNnV8');
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      // Define the prompt
      const prompt = `Provide a simple and well written financial insights based on this expense summary.make the insight free of special characters: ${expenseSummary}`;

      // Get the response from the Gemini model
      const result = await model.generateContent(prompt);

      // Set the generated insight in state
      setInsights(result.response.text);
    } catch (error) {
      console.error('Error generating insights:', error);
      setInsights('Failed to generate insights.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const getExpenseSummary = (expenses) => {
    let totalAmount = 0;
    let categoryMap = {};

    expenses.forEach((expense) => {
      totalAmount += expense.amount;
      if (categoryMap[expense.category]) {
        categoryMap[expense.category] += expense.amount;
      } else {
        categoryMap[expense.category] = expense.amount;
      }
    });

    // Create a simple text summary of the expenses
    return `You spent a total of ₹${totalAmount} on categories: ${Object.keys(categoryMap).map(
      (category) => `${category}: ₹${categoryMap[category]}`
    ).join(', ')}.`;
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Expense Insights</h3>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={generateInsights}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Insights'}
      </button>

      <div className="mt-4">
        <p>{insights}</p>
      </div>
    </div>
  );
};

export default ExpenseInsights;
