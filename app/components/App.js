import React from 'react';
import Footer from './Footer'
import Navbar from './Navbar'

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <i>App.js</i>

        <Navbar />

        <div className="container">
          {this.props.children}
        </div>

        <Footer />

      </div>
    )
  }
}

export default App;
