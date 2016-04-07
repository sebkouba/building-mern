import React from 'react';
import BodyweightGraph from './bodyweight/BodyweightGraph';

/**
 * Using ref rather than state to handle the values
 * */

class RecordWeight extends React.Component {
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
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="input-group col-md-6">
          <input type="text" className="form-control" placeholder="Enter weight"
                 ref={(ref) => this.setRef(ref)}/>
        <span className='input-group-btn'>
          <button className="btn btn-default" type="button"
                  onClick={() => this.handleSubmit()}>Submit
          </button>
        </span>
        </div>
        <BodyweightGraph />
      </div>
    )
  }
}

export default RecordWeight;
