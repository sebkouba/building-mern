import React from 'react';
import Child from './Child';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from the other side</h1>
        <Child />
      </div>
    )
  }
}

export default Hello;
