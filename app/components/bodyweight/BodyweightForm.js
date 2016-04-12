import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

require('react-datepicker/dist/react-datepicker.css');

const dateStyle = {
  margin: "10px 0 10px 0"
};

class BodyweightForm extends React.Component {
  render() {
    return (
      <form>
        <div id="datepick" style={dateStyle}>
          Date
          <DatePicker
            selected={this.props.formDate}
            onChange={this.props.handleDateChange}
            dateFormat="DD.MM.YYYY"
          />
        </div>
        <div className="input-group col-md-6">
          <input type="text" className="form-control" placeholder="Enter weight"
                 onChange={this.props.handleWeightChange}/>
          <span className='input-group-btn'>
            <button className="btn btn-default" type="submit"
                    onClick={this.props.handleSubmit}>Submit
            </button>
          </span>
        </div>
      </form>
    )
  }
}

export default BodyweightForm;
