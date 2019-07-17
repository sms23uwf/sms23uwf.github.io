import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addECourseRecommendation = (
  {
    description = '',
    note = '',
    domain = '',
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_COURSE_RECOMMENDATION',
  courserecommendation: {
    id: uuid(),
    description,
    note,
    domain,
    createdAt
  }
});

// REMOVE_COURSE_RECOMMENDATION
const removeCourseRecommendation = ({ id } = {}) => ({
  type: 'REMOVE_COURSE_RECOMMENDATION',
  id
});

// EDIT_COURSE_RECOMMENDATION
const editCourseRecommendation = (id, updates) => ({
  type: 'EDIT_COURSE_RECOMMENDATION',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_DOMAIN
const sortByDomain = () => ({
  type: 'SORT_BY_DOMAIN'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// Expenses Reducer

const courserecommendationsReducerDefaultState = [];

const courserecommendationsReducer = (state = courserecommendationsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_COURSE_RECOMMENDATION':
      return [
        ...state,
        action.courserecommendation
      ];
    case 'REMOVE_COURSE_RECOMMENDATION':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_COURSE_RECOMMENDATION':
      return state.map((courserecommendation) => {
        if (courserecommendation.id === action.id) {
          return {
            ...courserecommendation,
            ...action.updates
          };
        } else {
          return courserecommendation;
        };
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByKnowledgeArea());
store.dispatch(sortByContent());

// store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
