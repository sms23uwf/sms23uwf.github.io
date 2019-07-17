// Course Recommendations Reducer

const courserecommendationsReducerDefaultState = [];

export default (state = courserecommendationsReducerDefaultState, action) => {

  console.log(`action.type is ${action.type}`);

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
    case 'SET_COURSE_RECOMMENDATIONS':
      return action.courserecommendations;
    default:
      return state;
  }
};