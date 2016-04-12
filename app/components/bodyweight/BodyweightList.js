import React from 'react';
import moment from 'moment';

class BodyweightList extends React.Component {

  render() {
    const points = this.props.weights.map((weight) => {
      return <div
        key={weight._id}>{moment(weight.createdOn).format("DD.MM.YYYY")}: {weight.weight}</div>
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
