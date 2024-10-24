import React, { useState } from 'react';

const Filter = ({ setFilterCategory, setFilterDateRange }) => {
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const applyFilters = () => {
    setFilterCategory(category);
    setFilterDateRange({ startDate, endDate });
  };

  return (
    <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Category</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Filter by category"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Start Date</label>
        <input
          type="date"
          className="w-full px-3 py-2 border rounded-md"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">End Date</label>
        <input
          type="date"
          className="w-full px-3 py-2 border rounded-md"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
