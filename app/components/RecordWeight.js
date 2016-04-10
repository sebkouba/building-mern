import React from 'react';
import BodyweightList from './bodyweight/BodyweightList';
import BodyGraph from './bodyweight/BodyweightChartjs';
import { Line as LineChart } from "react-chartjs";

/**
 * Using ref rather than state to handle the values
 * */

class RecordWeight extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weights: [],
      weightsArray: [],
      data : {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
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
    console.log("will mount -> getWeight");
  }

  getWeight() {
    console.log("getting weight");
    const myArray = [];
    $.get("/getweight", (data) => {

      console.log("getweight data: " + data);
      data.map((val) => {
        myArray.push(val.weight);
      });
      console.log("data in getweight: " + data);
      console.log("myArray in getweight: " + myArray);

      const newVal = {...this.state.data};
      newVal.datasets[0].data = myArray;
      this.setState({data: newVal});
      this.setState({weights: data, data: newVal});
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
    console.log("saving weight: " + val);
    // post something to /entry
    $.ajax({
      url: '/recordweight',
      type: 'POST',
      data: {weight: val},
      success: function (data) {
        console.log("success");
        // optimistic rendering without error checking. Sketchy... but in "success"...
        //this.setState({weights:this.state.weights.concat({weight: val})});
        // now this isn't a pure function?!?...
        //$.get("/getweight", (data) => {
        //  this.setState({weights: data});
        //});
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
        <LineChart data={this.state.data} width="600" height="250"/>
        <BodyweightList weights={this.state.weights} />
      </div>
    )
  }
}

export default RecordWeight;
