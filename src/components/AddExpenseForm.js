import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenseActions';
import './AddExpenseForm.css'; 

const AddExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (name && amount) {
      addExpense({
        id: Math.random().toString(),
        name,
        amount: parseFloat(amount),
        date: new Date().toISOString(),
      });

      setName('');
      setAmount('');
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default connect(null, { addExpense })(AddExpenseForm);