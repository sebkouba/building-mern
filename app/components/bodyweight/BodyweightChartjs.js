import React from 'react';
import { Line as LineChart } from "react-chartjs";

class BodyweightChartjs extends React.Component {

  render() {
    return (
      <div>
        <LineChart data={this.props.data} width="600" height="250"/>

      </div>
    )
  }
};

export default BodyweightChartjs;
