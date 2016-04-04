import React from 'react';
import GroupSelect from './GroupSelect';

class UserAssign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: "Martin", id: 5, groups: [{ groupName: "user", groupId: 1 }] },
        { name: "Lukas", id: 6, groups: [{ groupName: "mod", groupId: 2 }] }
      ],
      groupList: [
        { name: "user", id: 1 },
        { name: "mod", id: 2 },
        { name: "admin", id: 3 }
      ],
      selectedUser: {}
    }
  }

  selectUser = (user) => {
    const newState = { ...this.state, selectedUser: user};
    this.setState(newState);
    console.log("selected user " + user.name)
  };

  joinGroup = (group) => {
    console.log("join group " + group.name);
    var newState = {...this.state};
    newState.selectedUser.groups.push({groupName: group.name, groupId: group.id});
    //var newState = {...this.state, selectedUser: newSelectedUser};
    this.setState(newState);
  };

  leaveGroup = (group) => {
    console.log("leaving group: " + group.groupName);
    var newState = {...this.state};
    for (var i = 0; i < newState.selectedUser.groups.length; i++){
      if (newState.selectedUser.groups[i].groupId === group.groupId){
        newState.selectedUser.groups.splice(i, 1);
      }
    }
    this.setState(newState);
  };

  saveUsers() {
    for (var i = 0; i < this.state.users.length; i++) {
      console.log("save user: " + this.state.users[i].name);
      $.ajax({
        type: "POST",
        url: "",
        data: this.state.users[i]
      });
    }
  }

  render() {
    const renderUsers = this.state.users.map( (user) => {
      const isactive = user.name === this.state.selectedUser.name ? "active" : null;
      return <a href="#" className={"list-group-item " + isactive} key={user.id}
                onClick={() => this.selectUser(user)}>{user.name}</a>
    });
    return (
      <div>
        <h1>Assign User to Group</h1>
        <h5>Click on a User to add or remove groups</h5>
        <div>
          <h4>User List</h4>
          <div className="list-group">
            {renderUsers}
          </div>

        </div>
        <GroupSelect user={this.state.selectedUser} groupList={this.state.groupList}
        joinGroup={this.joinGroup.bind(this)} leaveGroup={this.leaveGroup.bind(this)}/>
        <button className="btn btn-default" onClick={() => this.saveUsers()}>Save</button>
      </div>
    )
  }
}

export default UserAssign;
