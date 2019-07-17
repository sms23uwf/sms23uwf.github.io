import React from 'react';
import { Link } from 'react-router-dom';

const CourseRecommendationListItem = ({ id, counter, course, userid }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <span className="list-item__sub-title">{course.knowledgearea}</span>
      </div>
      <div>
      <span className="list-item__sub-title">{course.content}</span>
      </div>
  </Link>
);

export default CourseRecommendationListItem;
