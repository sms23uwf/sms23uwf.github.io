import React from 'react';
import LearningObjectiveSummary from './LearningObjectiveSummary';
import LearningObjectivesCollapsible from './LearningObjectivesCollapsible';

const DashboardPage = () => (
  <div>
    <LearningObjectiveSummary />
    <LearningObjectivesCollapsible />
  </div>
);

export default DashboardPage;
