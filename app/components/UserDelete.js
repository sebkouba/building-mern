import React from 'react';


class UserDelete extends React.Component {
// hide user upon xing and send ajax delete request
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { "name": "Vitor", "id" : 1 },
        { "name": "Adam", "id" : 2 },
        { "name": "Seb", "id" : 3 }
      ]
    }
  }

  deleteUser = (user) => {
    console.log("delete user: " + user.name);
    var newState = {...this.state};
    for (var i = 0; i < newState.users.length; i++){
      if (newState.users[i].id === user.id){
        newState.users.splice(i, 1);
      }
    }
    $.ajax({
        type: "DELETE",
        url: "",
        data: user.id
      });
    this.setState(newState);
  };

  render() {
    const renderUsers = this.state.users.map( (user) => {
      return <a href="#" key={user.id} className="list-group-item"
      onClick={() => this.deleteUser(user)}>{user.name}</a>
    });
    return (
      <div>
        <h1>Delete User</h1>
        <h5>Click User to delete</h5>
        <div className="list-group">
          {renderUsers}
        </div>
      </div>
    )
  }
}

export default UserDelete;
