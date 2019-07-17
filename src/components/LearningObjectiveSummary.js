import React from 'react';
import { connect } from 'react-redux';
import selectLearningObjectives from '../selectors/learningobjectives';
import selectLearningObjectivesTotal from '../selectors/learningobjectives-total';

export const LearningObjectivesSummary = ({ learningObjectivesCount, learningObjectivesTotal }) => {
  const learningObjectivesWord = learningObjectivesCount === 1 ? 'learning objective' : 'learning objectives';
  const formattedLearningObjectivesTotal = 1;

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing Learning Objectives</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleLearningObjectives= selectLearningObjectives(state.learningobjectives, state.filters);

  return {
    learningObjectivesCount: visibleLearningObjectives.length,
    learningObjectivesTotal: selectLearningObjectivesTotal(visibleLearningObjectives)
  };
};

export default connect(mapStateToProps)(LearningObjectivesSummary);
