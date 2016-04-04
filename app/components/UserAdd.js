import React from 'react';

class UserAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInvalid : true,
      saved: false,
      value: ""
    }
  }

  userChange(event){
    console.log(event.target.value);
    this.setState({
      value: event.target.value,
      userInvalid : this.validateUser(event.target.value)
    });
  }

  handleSubmit() {
    var newUser = this.state.value;
    var newState = {...this.state, value: "", userInvalid: true, saved: true};
    this.saveUser(newUser);
    this.setState(newState);
  }


  saveUser(username) {
    console.log("saving user: " + username);
    $.ajax({
      type: "POST",
      url: "",
      data: {username: username}
    });
  }

  validateUser(username) {
    // three letters, numbers, underscore
    var re = /^\w{3,10}$/;
    var invalid = !re.test(username);
    return invalid;
  }

  resetForm() {
    const newState = {...this.state, saved: false};
    this.setState(newState);
  }

  render() {
    return (
      <div className="row">
        <h1>Add User</h1>
        <div className={ this.state.saved ? "hidden" : "" }>
          <p>Please enter a username consisting of three or more alphanumeric characters. Underscores are also allowed.</p>
          <div className="input-group ">
            <input type="text" className="form-control" placeholder="Username"
                   value={this.state.value} onChange={this.userChange.bind(this)}/>
            <span className='input-group-btn'>
              <button className="btn btn-default" type="button"
                    onClick={() => this.handleSubmit()}
                    disabled={this.state.userInvalid}>Create
              </button>
            </span>
          </div>
          { this.state.userInvalid ?
            <div className="alert alert-warning">
              Username is invalid
            </div> : null}
          </div>
        <div className={ this.state.saved ? "" : "hidden" }>
          <div className="alert alert-success" role="alert">
            User saved.
          </div>
          <button className="btn btn-default" onClick={() => this.resetForm()}>OK</button>
        </div>
      </div>

    )
  }
}

export default UserAdd;
