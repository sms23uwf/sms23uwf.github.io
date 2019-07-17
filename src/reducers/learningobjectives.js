// Course Recommendations Reducer

const learningobjectivesReducerDefaultState = [];

export default (state = learningobjectivesReducerDefaultState, action) => {

  console.log(`action.type is ${action.type}`);

  switch (action.type) {
    case 'ADD_LEARNING_OBJECTIVE':
      return [
        ...state,
        action.learningobjective
      ];
    case 'REMOVE_LEARNING_OBJECTIVE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_LEARNING_OBJECTIVE':
      return state.map((learningobjective) => {
        if (learningobjective.id === action.id) {
          return {
            ...learningobjective,
            ...action.updates
          };
        } else {
          return learningobjective;
        };
      });
    case 'SET_LEARNING_OBJECTIVES':
      return action.learningobjectives;
    default:
      return state;
  }
};