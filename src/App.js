import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import MonthlyPieChart from './components/MonthlyPieChart'; // Updated to PieChart
import ExpenseInsights from './components/ExpenseInsights'; // Insights Component
import { auth, signInWithGoogle, logout } from './firebaseConfig'; // Firebase Auth
import SignInPage from './components/SignIn'; // New Sign-In Page Component

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState(null);

  // Firebase Auth Listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Add expense handler
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Delete expense handler
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense, index) => index !== id);
    setExpenses(updatedExpenses);
  };

  // Render the app based on authentication
  return (
    <div className="container mx-auto p-6">
      {/* App Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pocket Guardian</h1>
        {user ? (
          <div>
            <span className="mr-4">Welcome, {user.displayName}</span>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Sign Out
            </button>
          </div>
        ) : null}
      </div>

      {/* Main Content */}
      {user ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section - Form and Expense List */}
          <div className="space-y-6">
            <ExpenseForm addExpense={addExpense} />
            <div className="bg-white p-4 rounded-lg shadow-md h-64 overflow-y-scroll">
              <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
            </div>
          </div>

          {/* Right Section - Monthly Expense Pie Chart and Insights */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md h-64 flex justify-center items-center">
              <MonthlyPieChart expenses={expenses} />
            </div>
            <div className="bg-white p-15 rounded-lg shadow-md">
              <ExpenseInsights expenses={expenses} />
            </div>
          </div>
        </div>
      ) : (
        <SignInPage /> // Show Sign-In page when the user is not logged in
      )}
    </div>
  );
};

export default App;
