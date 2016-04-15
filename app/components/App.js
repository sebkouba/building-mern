import React from 'react';
import Navbar from './Navbar'


let divStyle = {
  border: "2px solid black",
  padding: "5px"
};

class App extends React.Component {
  render() {
    return (
      <div style={divStyle} className="main-container">
        <i>App.js</i>

        <Navbar />

        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
