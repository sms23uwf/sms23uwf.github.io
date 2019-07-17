import React from 'react';
import { connect } from 'react-redux';
import CourseRecommendationForm from './CourseRecommendationForm';
import { startEditCourseRecommendation, startRemoveCourseRecommendation } from '../actions/courserecommendations';

export class EditCourseRecommendationPage extends React.Component {
  onSubmit = (courserecommendation) => {
    this.props.startEditCourseRecommendation(this.props.courserecommendation.id, courserecommendation);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveCourseRecommendation({ id: this.props.courserecommendation.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Course Details</h1>
          </div>
        </div>
        <div className="content-container">
          <CourseRecommendationForm
            courserecommendation={this.props.courserecommendation}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  courserecommendation: state.courserecommendations.find((courserecommendation) => courserecommendation.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditCourseRecommendation: (id, courserecommendation) => dispatch(startEditCourseRecommendation(id, courserecommendation)),
  startRemoveCourseRecommendation: (data) => dispatch(startRemoveCourseRecommendation(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCourseRecommendationPage);
