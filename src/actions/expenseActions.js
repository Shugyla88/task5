export const addExpense = (expense) => {
    return {
      type: 'ADD_EXPENSE',
      payload: expense,
    };
  };
  
  export const deleteExpense = (expenseId) => {
    return {
      type: 'DELETE_EXPENSE',
      payload: expenseId,
    };
  };
  
  