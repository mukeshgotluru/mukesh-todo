// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, onChangeStrike, toggleIsCompleted} = props
  const {todo, id, isCompleted} = todoDetails

  const onClickDelete = () => {
    deleteTodo(id)
  }

  const onStrike = () => {
    toggleIsCompleted(id)
  }

  const className = isCompleted ? 'text' : 'mobile-no-value'
  const checked = isCompleted ? 'checked' : ''

  const deleteImgUrl = 'https://assets.ccbp.in/frontend/react-js/delete-img.png'

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onStrike}
        >
          <input
            type="checkbox"
            id={id}
            onChange={onChangeStrike}
            checked={checked}
          />
        </button>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <label htmlFor={id} className={className}>
          {todo}
        </label>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickDelete}
        >
          <img src={deleteImgUrl} className="favorite-icon" alt="delete" />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
