/* global JSON */
import React from 'react';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import Info from './info';
import RSVP from './rsvp';
import RSVPSeeYouThere from './rsvpSeeYouThere';
import RSVPNotComing from './rsvpNotComing';

export default () => {
  fetch('https://epslxa0lyc.execute-api.ap-southeast-2.amazonaws.com/prod', {
    method: 'POST',
    body: JSON.stringify({'hello': 'world', 'something': false})
  })
    .then(r => r.json())
    .then(r => console.log('success', r))
    .catch(r => console.log('error', r));

  return <HashRouter>
    <div>
      <h1>Ryami Wedding</h1>
      <Link to="/">Info</Link> | <Link to="/rsvp/">RSVP</Link>
      <hr />
      <div>
        <Switch>
          <Route exact path="/" component={Info}/>
          <Route exact path="/rsvp/" component={RSVP}/>
          <Route exact path="/rsvp/see-you-there/" component={RSVPSeeYouThere}/>
          <Route exact path="/rsvp/not-coming/" component={RSVPNotComing}/>
        </Switch>
      </div>
    </div>
  </HashRouter>;
}
