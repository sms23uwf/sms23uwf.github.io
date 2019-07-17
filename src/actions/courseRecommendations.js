import uuid from 'uuid';
import database from '../firebase/firebase';

export const addCourseRecommendation = (courseRecommendation) => ({
  type: 'ADD_COURSERECOMMENDATION',
  courseRecommendation
});

export const startAddCourseRecommendation = (courseRecommendationData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      course = '',
      createdAt = 0,
      userId = uid
    } = courseRecommendationData;
    const learningObjective = { course, createdAt };

    return database.ref(`courserecommendations`).push(courseRecommendation).then((ref) => {
      dispatch(addCourseRecommendation({
        id: ref.key,
        ...courseRecommendation
      }));
    });
  };
};

// REMOVE_COURSE_RECOMMENDATION
export const removeCourseRecommendation = ({ id } = {}) => ({
  type: 'REMOVE_COURSE_RECOMMENDATION',
  id
});

export const startRemoveCourseRecommendation = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`courserecommendation/${id}`).remove().then(() => {
      dispatch(removeCourseRecommendation({ id }));
    });
  };
};

// EDIT_COURSE_RECOMMENDATION
export const editCourseRecommendation = (id, updates) => ({
  type: 'EDIT_COURSE_RECOMMENDATION',
  id,
  updates
});

export const startEditCourseRecommendation = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`courserecommendation/${id}`).update(updates).then(() => {
      dispatch(editCourseRecommendation(id, updates));
    });
  };
};

// SET_COURSE_RECOMMENDATIONS
export const setCourseRecommendations = (courserecommendations) => ({
  type: 'SET_COURSE_RECOMMENDATIONS',
  courserecommendations
});

export const startSetCourseRecommendations = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`courserecommendation`).once('value').then((snapshot) => {
        const courserecommendations = [];

        console.log("here is the number of course recommendations in startSetCourseRecommendations");
        console.log(getState().courserecommendations.length);
      
        console.log(`here is the current user id: ${uid}`);
        console.log(snapshot.val());

      snapshot.forEach((childSnapshot) => {
        courserecommendations.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      console.log('here is the course recommendations array');
      console.log(courserecommendations);


      dispatch(setCourseRecommendations(courserecommendations));
    });
  };
};
