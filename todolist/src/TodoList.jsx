import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }
  create(task) {
    let updatedTodos = [...this.state.todos, task];
    this.setState({ todos: updatedTodos });
  }
  remove(id) {
    let updatedTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: updatedTodos
    });
  }
  update(id, updatedtask) {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedtask };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        remove={this.remove}
        task={todo.task}
        id={todo.id}
        key={todo.id}
        update={this.update}
        completed={todo.completed}
      />
    ));
    return (
      <div>
        <h1>TodoList</h1>
        <ul>{todos}</ul>
        <NewTodoForm create={this.create} />
      </div>
    );
  }
}

export default TodoList;
