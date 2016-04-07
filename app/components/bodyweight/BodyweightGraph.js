import React from 'react';

class BodyweightGraph extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weights: []
    }
  }

  componentWillMount() {
    $.get("/getweight", (data) => {
      this.setState({weights: data});
    })
  }

  render() {
    const points = this.state.weights.map((weight) => {
      return <div>{weight.weight}</div>
    });
    return (
      <div>
        <h3>Recorded Weights</h3>
        <div>
          {points}
        </div>
      </div>
    )
  }
}

export default BodyweightGraph;
