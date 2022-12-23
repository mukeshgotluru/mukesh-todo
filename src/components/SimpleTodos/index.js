import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

class SimpleTodos extends Component {
  state = {
    todosList: [],
    todo: '',
  }

  onAddContact = event => {
    event.preventDefault()
    const {todo} = this.state

    const newTodo = {
      id: uuidv4(),
      todo,
      isCompleted: false,
    }

    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      todo: '',
    }))
  }

  onChangeTodo = event => {
    this.setState({todo: event.target.value})
  }

  toggleIsCompleted = id => {
    this.setState(prevState => ({
      todosList: prevState.todosList.map(eachTodo => {
        if (id === eachTodo.id) {
          return {...eachTodo, isCompleted: !eachTodo.isCompleted}
        }
        return eachTodo
      }),
    }))
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredTodos = todosList.filter(each => each.id !== id)

    this.setState({
      todosList: filteredTodos,
    })
  }

  render() {
    const {todo, todosList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Add Todos</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={todo}
              onChange={this.onChangeTodo}
              className="input"
              placeholder="Name"
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <ul className="contacts-table">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                toggleIsCompleted={this.toggleIsCompleted}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
