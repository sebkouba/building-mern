import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Guten Tag!</h1>
        <p>You can click on the navbar up top to visit the different pages.</p>
        <p>All AJAX calls lead nowhere and have no effect. </p>
        <p>Each page starts with the assumption that data was loaded into the components state.</p>
      </div>
    )
  }
}

export default Home;
