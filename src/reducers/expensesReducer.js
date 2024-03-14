const initialState = [];

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];

    case 'DELETE_EXPENSE':
      return state.filter((expense) => expense.id !== action.payload);

    case 'SORT_EXPENSES_BY_DATE':
      return [...state].sort((a, b) => new Date(b.date) - new Date(a.date));

    default:
      return state;
  }
};

export default expensesReducer;