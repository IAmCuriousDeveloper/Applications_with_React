import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
    this.create - this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <CSSTransition key={todo.id} timeout={500} classNames='todo'>
          <Todo
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            removeTodo={this.remove}
            updateTodo={this.updateTodo}
            toggleTodo={this.toggleCompletion}
          ></Todo>
        </CSSTransition>
      );
    });
    return (
      <div className='TodoList'>
        <h1>Get you work done ,You can do it</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>
          <TransitionGroup className='todo-List'>{todos}</TransitionGroup>
        </ul>
      </div>
    );
  }
}
