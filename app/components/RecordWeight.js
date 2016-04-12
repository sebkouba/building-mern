import React from 'react';
import BodyweightList from './bodyweight/BodyweightList';
import BodyGraph from './bodyweight/BodyweightChartjs';
import BodyweightForm from './bodyweight/BodyweightForm';
import { Line as LineChart } from "react-chartjs";
import moment from 'moment';

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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    this.state = {
      formWeight: "",
      formDate: moment(),

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
        labelArr.push(moment(val.date).format("DD.MM.YYYY"));
      });
      const newData = {...this.state.data};
      newData.datasets[0].data = weightsArr;
      newData.labels = labelArr;
      this.setState({weights: data, data: newData});
    });
  }

  handleSubmit() {
    console.log("submitting");
    var newWeight = this.state.formWeight;
    this.setState({formWeight: ""});
    this.saveWeight(newWeight);
  }

  handleWeightChange(e) {
    this.setState({formWeight: e.target.value})
  }

  handleDateChange(date) {
    this.setState({formDate: date})
  }

  saveWeight(val) {
    $.ajax({
      url: '/weight',
      type: 'POST',
      data: {weight: val, date: this.state.formDate.valueOf()},
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
        <p>Should at some point switch to 2.0 of Chartjs or use something with
        proper x axis spacing given the dates...</p>

        <BodyweightForm handleWeightChange={this.handleWeightChange}
        handleSubmit={this.handleSubmit}
        handleDateChange={this.handleDateChange}
        formDate={this.state.formDate}/>

        <div style={linchartStyle}>
          <LineChart data={this.state.data} redrawx width="600" height="250"/>
        </div>
        <BodyweightList weights={this.state.weights} />
      </div>
    )
  }
}

export default RecordWeight;
