import React from 'react';

class GroupAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupInvalid : true,
      saved: false,
      value: ""
    }
  }

  groupChange(event){
    console.log(event.target.value);
    this.setState({
      value: event.target.value,
      groupInvalid : this.validateGroup(event.target.value)
    });
    console.log("valid in state: " + this.state.groupInvalid);
  }

  handleSubmit() {
    var newGroup = this.state.value;
    var newState = {...this.state, value: "", groupInvalid: true, saved: true};
    this.saveGroup(newGroup);
    this.setState(newState);
  }


  saveGroup(groupname) {
    console.log("saving group: " + groupname);
    $.ajax({
      type: "POST",
      url: "",
      data: {groupname: groupname}
    });
  }

  validateGroup(groupname) {
    // three letters, numbers, underscore
    var re = /^\w{3,10}$/;
    var invalid = !re.test(groupname);
    console.log("invalid group: " + invalid);
    return invalid;
  }

  resetForm() {
    console.log("reset form");
    const newState = {...this.state, saved: false};
    this.setState(newState);
  }

  render() {
    return (
      <div className="row">
        <h1>Add Group</h1>
        <div className={ this.state.saved ? "hidden" : "" }>
          <p>Please enter a groupname consisting of three or more alphanumeric characters. Underscores are also allowed.</p>
          <div className="input-group ">
            <input type="text" className="form-control" placeholder="Groupname"
                   value={this.state.value} onChange={this.groupChange.bind(this)}/>
            <span className='input-group-btn'>
              <button className="btn btn-default" type="button"
                    onClick={() => this.handleSubmit()}
                    disabled={this.state.groupInvalid}>Create
              </button>
            </span>
          </div>
          { this.state.groupInvalid ?
            <div className="alert alert-warning">
              Groupname is invalid
            </div> : null}
          </div>
        <div className={ this.state.saved ? "" : "hidden" }>
          <div className="alert alert-success" role="alert">
            Group saved.
          </div>
          <button className="btn btn-default" onClick={() => this.resetForm()}>OK</button>
        </div>
      </div>

    )
  }
}

export default GroupAdd;
