/* global JSON */
import React from 'react';
import {HashRouter, Route, Switch, NavLink} from 'react-router-dom';
import Info from './info';
import Ceremony from './ceremony';
import RSVP from './rsvp';
import RSVPSeeYouThere from './rsvpSeeYouThere';
import RSVPNotComing from './rsvpNotComing';
import logoUrl from '../images/logo.png';

export default () => {
  return <HashRouter>
    <div>
      <h1><img src={logoUrl} alt="Ryami Wedding" /></h1>
      <nav>
        <NavLink exact to="/">RSVP</NavLink>
        <NavLink to="/info/">Info</NavLink>
        <NavLink to="/ceremony/">Ceremony</NavLink>
      </nav>
      <section id="main-content">
        <Switch>
          <Route exact path="/" component={RSVP}/>
          <Route exact path="/info/" component={Info}/>
          <Route exact path="/ceremony/" component={Ceremony}/>
          <Route exact path="/see-you-there/" component={RSVPSeeYouThere}/>
          <Route exact path="/not-coming/" component={RSVPNotComing}/>
        </Switch>
      </section>
    </div>
  </HashRouter>;
}
