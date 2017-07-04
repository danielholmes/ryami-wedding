import React from 'react';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import Info from './info';
import RSVP from './rsvp';

export default () => {
  return <HashRouter>
    <div>
      <h1>Ryami Wedding</h1>
      <Link to="/">Info</Link> | <Link to="/rsvp/">RSVP</Link>
      <hr />
      <div>
        <Switch>
          <Route exact path="/" component={Info}/>
          <Route exact path="/rsvp/" component={RSVP}/>
        </Switch>
      </div>
    </div>
  </HashRouter>;
}
