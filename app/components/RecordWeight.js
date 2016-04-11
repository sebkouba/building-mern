import React from 'react';
import BodyweightList from './bodyweight/BodyweightList';
import BodyGraph from './bodyweight/BodyweightChartjs';
import { Line as LineChart } from "react-chartjs";

/**
 * Using ref rather than state to handle the values
 * */

var linchartStyle = {
  border: "3px solid green",
  padding: "10px",
  margin: "10px 0 10px 0"
};

class RecordWeight extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // entire mongo records
      weights: [],

      // data for graph
      data : {
        labels: [],
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
          }
        ]
      }
    }
  }

  componentWillMount() {
    this.getWeight();
  }

  // update weight data state from server
  getWeight() {
    const weightsArr = [];
    const labelArr = [];
    $.get("/weight", (data) => {
      data.map((val) => {
        weightsArr.push(val.weight);
        labelArr.push(val.createdOn.substring(0, 10));
      });
      const newData = {...this.state.data};
      newData.datasets[0].data = weightsArr;
      newData.labels = labelArr;
      this.setState({weights: data, data: newData});
    });
  }

  handleSubmit() {
    var newWeight = this.weight.value;
    this.weight.value = '';
    this.saveWeight(newWeight);
  }

  setRef(ref) {
    this.weight = ref;
  }

  saveWeight(val) {
    $.ajax({
      url: '/weight',
      type: 'POST',
      data: {weight: val},
      success: function (data) {
        console.log("saved data - updating state");
        this.getWeight();
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Record Bodyweight</h1>
        <p>Please enter your bodyweight and corresponding date.</p>
        <form>
          <div className="input-group col-md-6">
            <input type="text" className="form-control" placeholder="Enter weight"
                   ref={(ref) => this.setRef(ref)}/>
          <span className='input-group-btn'>
            <button className="btn btn-default" type="submit"
                    onClick={() => this.handleSubmit()}>Submit
            </button>
          </span>
          </div>
        </form>
        <div style={linchartStyle}>
          <LineChart data={this.state.data} width="600" height="250"/>
        </div>
        <BodyweightList weights={this.state.weights} />
      </div>
    )
  }
}

export default RecordWeight;
