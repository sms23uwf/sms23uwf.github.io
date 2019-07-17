import React from 'react';
import CourseRecommendationsSummary from './CourseRecommendationSummary';
import CourseRecommendationListFilters from './CourseRecommendationListFilters';
import CourseRecommendationsList from './CourseRecommendationList';

const RecommendationsDashboard = () => (
  <div>
    <CourseRecommendationsSummary />
    <CourseRecommendationListFilters />
    <CourseRecommendationsList />
  </div>
);

export default RecommendationsDashboard;
