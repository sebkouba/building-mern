import React from 'react';
import Router, {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import UserAdd from './components/UserAdd';
import UserDelete from './components/UserDelete';
import GroupAdd from './components/GroupAdd';
import GroupDelete from './components/GroupDelete';
import UserGroup from './components/AssignUserGroup';

export default (
  <Route path="/" component={App}>
    <Route path="/useradd" component={UserAdd}/>
    <Route path="/userdelete" component={UserDelete}/>
    <Route path="/groupadd" component={GroupAdd}/>
    <Route path="/groupdelete" component={GroupDelete}/>
    <Route path="/usergroup" component={UserGroup}/>
    <IndexRoute component={Home}/>
  </Route>
)
