import React, { PropTypes } from 'react'
import Todo from './Todo'

// simply eats and renders a bunch of todos with onclick functions
const TodoList = ({ todos, onTodoClick, onTodoDelete }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onHighlightClick={() => onTodoClick(todo.id)}
        onDeleteClick={() => onTodoDelete(todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired
};

export default TodoList
