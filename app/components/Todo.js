import React, { PropTypes } from 'react'

const Todo = ({ onHighlightClick, onDeleteClick, completed, text }) => (
  <span>
  <li
    onClick={onHighlightClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>

  <a href="#" onClick={onDeleteClick}>DEL</a>

  </span>
);

Todo.propTypes = {
  onHighlightClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo
