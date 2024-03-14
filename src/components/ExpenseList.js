import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/expenseActions';

import './ExpenseList.css'; 

const ExpenseList = ({ expenses, deleteExpense }) => {
  const handleDelete = (expenseId) => {
    deleteExpense(expenseId);
  };

  return (
    <div className="expense-list-container">
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses to display.</p>
      ) : (
        <ul className="expense-list">
          {expenses.map((expense) => (
            <li key={expense.id} className="expense-item">
              <span className="expense-name">{expense.name}</span>
              <span className="expense-amount">${expense.amount}</span>
              <span className="expense-date">{new Date(expense.date).toLocaleDateString()}</span>
              <button onClick={() => handleDelete(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteExpense: (expenseId) => dispatch(deleteExpense(expenseId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);