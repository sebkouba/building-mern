var React = require('react');
var ReactDOM = require('react-dom');
import Hello from './components/Hello.js';

var App = React.createClass({
  render: function () {
    return (
      <Hello />
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
