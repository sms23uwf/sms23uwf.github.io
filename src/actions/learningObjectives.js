import uuid from 'uuid';
import database from '../firebase/firebase';

export const addLearningObjective = (learningObjective) => ({
  type: 'ADD_LEARNING_OBJECTIVE',
  learningObjective
});

export const startAddLearningObjective = (learningObjectiveData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      createdAt = 0
    } = learningObjectiveData;
    const learningObjective = { description, createdAt };

    return database.ref(`users/${uid}/learningobjectives`).push(learningobjective).then((ref) => {
      dispatch(addLearningObjective({
        id: ref.key,
        ...learningobjective
      }));
    });
  };
};

// REMOVE_LEARNING_OBJECTIVE
export const removeLearningObjective = ({ id } = {}) => ({
  type: 'REMOVE_LEARNING_OBJECTIVE',
  id
});

export const startRemoveLearningObjective = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`learningobjective/${id}`).remove().then(() => {
      dispatch(removeLearningObjective({ id }));
    });
  };
};

// EDIT_LEARNING_OBJECTIVE
export const editLearningObjective = (id, updates) => ({
  type: 'EDIT_LEARNING_OBJECTIVE',
  id,
  updates
});

export const startEditLearningObjective = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`learningobjective/${id}`).update(updates).then(() => {
      dispatch(editLearningObjective(id, updates));
    });
  };
};

// SELECT_LEARNING_OBJECTIVES
export const selectLearningObjectives = (learningobjectives) => ({
  type: 'SELECT_LEARNING_OBJECTIVES',
  learningobjectives
});

export const startSelectLearningObjectives = (knowledgearea) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`learningobjective/${knowledgearea}`).once('value').then((snapshot) => {
        const learningobjectives = [];

        console.log("here is the number of learning objectives in startSetLearningObjectives");
        console.log(getState().learningobjectives.length);
      
        console.log(`here is the current user id: ${uid}`);
        console.log(snapshot.val());

      snapshot.forEach((childSnapshot) => {
        learningobjectives.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(selectLearningObjectives(ilearningobjectives));
    });
  };
};

// SET_LEARNING_OBJECTIVES
export const setLearningObjectives = (learningobjectives) => ({
  type: 'SET_LEARNING_OBJECTIVES',
  learningobjectives
});

export const startSetLearningObjectives = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const knowledgearea = getState().knowledgeareas.content;
    return database.ref(`learningobjective`).once('value').then((snapshot) => {
        const learningobjectives = [];

        console.log("here is the number of learning objectives in startSetLearningObjectives");
        console.log(getState().learningobjectives.length);
      
        console.log(`here is the current user id: ${uid}`);
        console.log(snapshot.val());

      snapshot.forEach((childSnapshot) => {
        learningobjectives.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      console.log('here is the learning objectives array');
      console.log(learningobjectives);
      
      dispatch(setLearningObjectives(learningobjectives));
    });
  };
};