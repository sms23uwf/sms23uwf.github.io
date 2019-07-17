import uuid from 'uuid';
import database from '../firebase/firebase';

export const addKnowledgeArea = (knowledgeArea) => ({
  type: 'ADD_KNOWLEDGE_AREA',
  knowledgearea
});

export const startAddKnowledgeArea = (knowledgeAreaData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      content = '',
      createdAt = 0
    } = knowledgeAreaData;
    const knowledgeArea = { content, createdAt };

    return database.ref(`users/${uid}/knowledgeareas`).push(knowledgearea).then((ref) => {
      dispatch(addKnowledgeArea({
        id: ref.key,
        ...knowledgearea
      }));
    });
  };
};

// REMOVE_KNOWLEDGE_AREA  
export const removeKnowledgeArea = ({ id } = {}) => ({
  type: 'REMOVE_KNOWLEDGE_AREA',
  id
});

export const startRemoveKnowledgeArea = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`knowledgearea/${id}`).remove().then(() => {
      dispatch(removeKnowledgeArea({ id }));
    });
  };
};

// EDIT_KNOWLEDGE_AREA
export const editKnowledgeArea = (id, updates) => ({
  type: 'EDIT_KNOWLEDGE_AREA',
  id,
  updates
});

export const startEditKnowledgeArea = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`knowledgearea/${id}`).update(updates).then(() => {
      dispatch(editKnowledgeArea(id, updates));
    });
  };
};

// SET_KNOWLEDGE_AREAS
export const setKnowledgeAreas = (knowledgeareas) => ({
  type: 'SET_KNOWLEDGE_AREAS',
  knowledgeareas
});

export const startSetKnowledgeAreas = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`knowledgearea`).once('value').then((snapshot) => {
        const knowledgeareas = [];

     
        console.log(`here is the current user id: ${uid}`);
        console.log(snapshot.val());

      snapshot.forEach((childSnapshot) => {
        knowledgeareas.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      console.log("here is the number of knowledge areas in startSetKnowledgeAreas");
      console.log(knowledgeareas.length);

      console.log('here is the knowledge areas array');
      console.log(knowledgeareas);

      dispatch(setKnowledgeAreas(knowledgeareas));
    });
  };
};
