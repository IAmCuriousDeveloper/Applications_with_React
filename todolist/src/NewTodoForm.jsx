import React, { Component } from "react";
import uuid from "uuid/v4";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ""
    };
    this.handleChange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='NewTodoForm'>
        <label htmlFor='task'>New Todo</label>
        <input
          type='text'
          placeholder='New Todo'
          id='task'
          namd='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type='submit'>Add Todo</button>
      </form>
    );
  }
}
