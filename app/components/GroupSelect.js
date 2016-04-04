import React from 'react';

class GroupSelect extends React.Component {
  render() {
    var groups = [];

    var memberOf = "Select User";
    if (this.props.user.name) {
      memberOf = this.props.user.groups.map( (group) => {
        groups.push(group.groupId);
        return <a href="#" className="list-group-item" key={group.groupId}
                  onClick={() => this.props.leaveGroup(group)}>{group.groupName}</a>
      });
    }

    var available = "Select User";
    if (this.props.user.name) {
      available = this.props.groupList.map ( (group) => {
        if (groups.indexOf(group.id) == -1) {
          return <a href="#" className="list-group-item" key={group.id}
                    onClick={() => this.props.joinGroup(group)}>{group.name}</a>
        }
      });
    }

    return (
      <div id="groupSelect">
        <div id="selectedGroups">
          <h3>Member of</h3>
          <h5>Click to remove from group</h5>
          <div className="list-group">
            {memberOf}
          </div>
        </div>
        <div id="availableGroups">
          <h3>Available</h3>
          <h5>Click to add group</h5>
          <div className="list-group">
            {available}
          </div>
        </div>
      </div>
    )
  }
}

export default GroupSelect;
