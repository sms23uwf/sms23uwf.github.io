// Course Recommendations Reducer

const knowledgeAreasReducerDefaultState = [];

export default (state = knowledgeAreasReducerDefaultState, action) => {

  console.log(`action.type is ${action.type}`);

  switch (action.type) {
    case 'ADD_KNOWLEDGE_AREA':
      return [
        ...state,
        action.knowledgearea
      ];
    case 'REMOVE_KNOWLEDGE_AREA':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_KNOWLEDGE_AREA':
      return state.map((knowledgearea) => {
        if (knowledgearea.id === action.id) {
          return {
            ...knowledgearea,
            ...action.updates
          };
        } else {
          return knowledgearea;
        };
      });
    case 'SET_KNOWLEDGE_AREAS':
      return action.knowledgeareas;
    default:
      return state;
  }
};