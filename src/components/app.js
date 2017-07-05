/* global JSON */
import React from 'react';
import {HashRouter, Route, Switch, NavLink} from 'react-router-dom';
import Info from './info';
import RSVP from './rsvp';
import RSVPSeeYouThere from './rsvpSeeYouThere';
import RSVPNotComing from './rsvpNotComing';
import logoUrl from '../images/logo.png';

export default () => {
  return <HashRouter>
    <div>
      <h1><img src={logoUrl} alt="Ryami Wedding" /></h1>
      <nav>
        <NavLink exact to="/">Info</NavLink>
        <NavLink to="/rsvp/">RSVP</NavLink>
      </nav>
      <section id="main-content">
        <Switch>
          <Route exact path="/" component={Info}/>
          <Route exact path="/rsvp/" component={RSVP}/>
          <Route exact path="/rsvp/see-you-there/" component={RSVPSeeYouThere}/>
          <Route exact path="/rsvp/not-coming/" component={RSVPNotComing}/>
        </Switch>
      </section>
    </div>
  </HashRouter>;
}
