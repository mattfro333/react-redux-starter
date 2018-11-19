import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { titles: null }
    };
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
          <h2>Taught by Uncle Ruckus</h2>
          <p>MaF</p>
          <p>Readin</p>
          <p>Scribble Scratch</p>
          <p>Kung Foolery</p>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

export default CoursesPage;
