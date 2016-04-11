import React from 'react';
import Router, {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home'
import RecordPB from './components/RecordPB'
import RecordWeight from './components/RecordWeight'
import RecordMeasurements from './components/RecordMeasurements'
import SavePics from './components/SavePics'

export default (
  <Route path="/" component={App}>
    <Route path="/recordpb" component={RecordPB} />
    <Route path="/bodyweight" component={RecordWeight} />
    <Route path="/recordmeasurements" component={RecordMeasurements} />
    <Route path="/savepics" component={SavePics} />
    <IndexRoute component={Home} />
  </Route>
)
