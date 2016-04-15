import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

// determine the props that should be used to render the TodoList presentation Comp.

// filters todos that were passed in to only match the passed filter
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
};

// look at state to determine which todos should be visible using getVisibleTodos
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

// define what should happen when clicking onTodoClick => dispatch an action
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onTodoDelete: (id) => {
      dispatch(deleteTodo(id))
    }
  }
};

// merge state and function into TodoList presentational component
// which uses the todos and onTodoClick props
// this can then be rendered by App.js
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList
