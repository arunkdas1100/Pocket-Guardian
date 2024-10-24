import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPieChart = ({ expenses }) => {
  const categories = [...new Set(expenses.map((expense) => expense.category))];

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: categories.map((category) =>
          expenses
            .filter((expense) => expense.category === category)
            .reduce((total, expense) => total + expense.amount, 0)
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Expenses by Category</h2>
      <div className="flex justify-center">
        {/* Reduced the size of the Pie Chart */}
        <Pie data={data} width={1} height={1} />
      </div>
    </div>
  );
};

export default CategoryPieChart;
