import React from 'react';



class GroupDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [
        {"name": "user", "members": 40, "id": 1},
        {"name": "mod", "members": 3, "id": 2},
        {"name": "admin", "members": 4, "id": 3},
        {"name": "admin2", "members": 0, "id": 4},
        {"name": "adminx", "members": 0, "id": 5}
      ]
    }
  };

  deleteGroup = (group) => {
    console.log("delete group: " + group.name);
    var newState = {...this.state};
    for (var i = 0; i < newState.groups.length; i++){
      if (newState.groups[i].id === group.id){
        newState.groups.splice(i, 1);
      }
    }
    $.ajax({
        type: "DELETE",
        url: "",
        data: group.id
      });
    this.setState(newState);
  };

  render() {
    const renderGroups = this.state.groups.map((group) => {
      if (!group.members) {
        return <a href="#" key={group.id} className="list-group-item"
        onClick={() => this.deleteGroup(group)}>
          <span className="badge">{group.members} Members</span> {group.name}</a>
      }
      return <a href="#" key={group.id} className="list-group-item disabled">
        <span className="badge">{group.members} Members</span>{group.name}</a>
    });

    return (
      <div>
        <h1>Delete Group</h1>
        <h5>Click Group to delete</h5>
        <div className="list-group">
          {renderGroups}
        </div>
      </div>
    )
  }
}

export default GroupDelete;
