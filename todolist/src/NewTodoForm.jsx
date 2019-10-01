import React, { Component } from "react";
import uuid from "uuid/v4";
export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.create({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>New Todo</label>
        <input
          type='text'
          name='New Todo'
          id='task'
          value={this.state.task}
          name='task'
          onChange={this.handleChange}
        />
        <button>submit</button>
      </form>
    );
  }
}
