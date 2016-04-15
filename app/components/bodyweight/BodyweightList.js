import React from 'react';
import moment from 'moment';

class BodyweightList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderWeight({createdOn, weight, _id}) {
    return <div
      key={_id}>{moment(createdOn).format("DD.MM.YYYY")}: {weight}</div>
  }

  render() {
    // took this out of rended, put into own method with desctructured args
    //const points = this.props.weights.map((weight) => {
    //  return <div
    //    key={weight._id}>{moment(weight.createdOn).format("DD.MM.YYYY")}: {weight.weight}</div>
    //});
    return (
      <div>
        <h3>Recorded Weights</h3>
        <div>
          {this.props.weights.map(this.renderWeight)}
        </div>
      </div>
    )
  }
}

export default BodyweightList;
