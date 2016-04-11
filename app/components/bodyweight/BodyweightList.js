import React from 'react';

class BodyweightList extends React.Component {

  render() {
    const points = this.props.weights.map((weight) => {
      return <div key={weight._id}>{weight.createdOn.substring(0, 10)}: {weight.weight}</div>
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

export default BodyweightList;
