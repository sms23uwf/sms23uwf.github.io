import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import courseRecommendationsReducer from '../reducers/courserecommendations';
import learningObjectivesReducer from '../reducers/learningobjectives';
import knowledgeAreasReducer from '../reducers/knowledgeareas.js';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      courserecommendations: courseRecommendationsReducer,
      learningobjectives: learningObjectivesReducer,
      knowledgeareas: knowledgeAreasReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};