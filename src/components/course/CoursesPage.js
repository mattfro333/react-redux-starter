import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   course: { titles: null }
    // };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course });
  // }

  // onClickSave() {
  //   this.props.actions.createCourse(this.state.course);
  // }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const {courses} = this.props;
    // debugger;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
        //   <h2>Taught by Uncle Ruckus</h2>
        //   <p>MaF</p>
        //   <p>Readin</p>
        //   <p>Scribble Scratch</p>
        //   <p>Kung Foolery</p>
        // <input
        //   type="text"
        //   onChange={this.onTitleChange}
        //   value={this.state.course.title} />
        // <input
        //   type="submit"
        //   value="Save"
        //   onClick={this.onClickSave} />
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
