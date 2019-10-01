import React, { Component } from "react";
import "./Todo.css";
export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.task,
      completed: this.props.completed
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.ChangeInputText = this.ChangeInputText.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  handleRemove(e) {
    this.props.remove(this.props.id);
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.update(this.props.id, this.state.task);
    //after editing set isEditing to false again
    this.setState({
      isEditing: false
    });
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  ChangeInputText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  toggleTask(e) {
    this.setState({ completed: !this.state.completed });
  }
  render() {
    let Result;
    if (this.state.isEditing) {
      Result = (
        <form onSubmit={this.handleUpdate}>
          <label htmlFor='task'></label>
          <input
            type='text'
            name='task'
            id='task'
            value={this.state.task}
            onChange={this.ChangeInputText}
          />
          <button>Submit</button>
        </form>
      );
    } else {
      Result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li
            onClick={this.toggleTask}
            className={this.state.completed ? "completed" : ""}
          >
            {this.props.task}
          </li>
        </div>
      );
    }
    return Result;
  }
}
