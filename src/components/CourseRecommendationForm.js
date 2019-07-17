import React from 'react';
import { Redirect } from 'react-router';

export default class CourseRecommendationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.courserecommendation ? props.courserecommendation.course.content : '',
      description: props.courserecommendation ? props.courserecommendation.course.description : '',
      knowledgearea: props.courserecommendation ? props.courserecommendation.course.knowledgearea : '',
      disposition: props.courserecommendation ? props.courserecommendation.disposition : '',
      learningobjectives: props.courserecommendation ? props.courserecommendation.learningobjectives : [],
      registrationurl: props.courserecommendation ? props.courserecommendation.registrationurl : '',
      calendarFocused: false,
      error: '',
      toDashboard: false
    };
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    this.setState(() => ({ toDashboard: true }))
  };
  render() {
    if( this.state.toDashboard === true) {
      return <Redirect to='/recommendationsDashboard' />
    }
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <label>{this.state.knowledgearea}</label>

        <label>{this.state.description}</label>

        <label>{this.state.disposition}</label>

        <div>
          <button className="button">Return</button>
        </div>
      </form>
    )
  }
}
