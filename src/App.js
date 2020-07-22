import React from 'react';
import './App.css';
import { todos } from './todos.json'
import TaskForm from './components/TaskForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  handleAddToDo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeToDo(index) {
    if (window.confirm('Estas seguro de eliminar la tarea?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-3">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger"
                onClick={this.removeToDo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App" >
        <nav nav className="navbar navbar-dark bg-dark" >
          <a href="#" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav >
        <div className="container">
          <div className="row mt-4">
            <TaskForm onAddToDo={this.handleAddToDo} />
            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
