import React from 'react';
import { connect } from 'react-redux';
import selectRecommendedCourses from '../selectors/recommendedcourses';
import selectRecommendedCoursesTotal from '../selectors/recommendedcourses-total';

export const RecommendationsSummary = ({ learningObjectivesCount, learningObjectivesTotal }) => {
  const learningObjectivesWord = learningObjectivesCount === 1 ? 'learning objective' : 'learning objectives';
  const formattedLearningObjectivesTotal = 1;

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Recommended Courses</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleRecommendedCourses= selectRecommendedCourses(state.recommendedcourses, state.filters);

  return {
    recommendedCoursesCount: visibleRecommendedCourses.length,
    recommendedCoursesTotal: selectRecommendedCoursesTotal(visibleRecommendedCourses)
  };
};

export default connect(mapStateToProps)(RecommendationsSummary);
