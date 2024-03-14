import React from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpense from './components/TotalExpense';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Expense Tracker App</h1>
      <AddExpenseForm />
      <ExpenseList />
      <TotalExpense />
    </div>
  );
};

export default App;