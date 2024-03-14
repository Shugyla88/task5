import React from 'react';
import { connect } from 'react-redux';
import './TotalExpense.css'; 

const TotalExpense = ({ total }) => {
  return (
    <div>
      <h2>Total Expense</h2>
      <p>${total.toFixed(2)}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.expenses.reduce((acc, expense) => acc + expense.amount, 0),
  };
};

export default connect(mapStateToProps)(TotalExpense);