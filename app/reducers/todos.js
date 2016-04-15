const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'DELETE_TODO':
      console.log("Delete: " + action.id);
      //return [
      //  //...state,
      //  ...state.slice(0, action.id),
      //  ...state.slice(action.id + 1)
      //];
      //creates a new array including elements where the filter function returns true
      // return all todos except the one where the action.id matches the todo.id
      return state.filter(todo =>
        todo.id !== action.id
      );
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state
  }
};

export default todos
