import React from 'react';
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my Home!</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default Home;
