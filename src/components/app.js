/* global JSON */
import React from 'react';
import {HashRouter, Route, Redirect, Switch, NavLink} from 'react-router-dom';
import Info from './info';
import Ceremony from './ceremony';
import RSVPSeeYouThere from './rsvpSeeYouThere';
import RSVPNotComing from './rsvpNotComing';
import logoUrl from '../images/logo.png';

export default () => {
  return <HashRouter>
    <div>
      <h1><img src={logoUrl} alt="Ryami Wedding" /></h1>
      <nav>
        <NavLink exact to="/">Info</NavLink>
        <NavLink to="/ceremony/">Ceremony</NavLink>
      </nav>
      <section id="main-content">
        <Switch>
          <Route exact path="/" component={Info}/>
          <Redirect from="/info/" to="/" />
          <Route exact path="/ceremony/" component={Ceremony}/>
          <Route exact path="/see-you-there/" component={RSVPSeeYouThere}/>
          <Route exact path="/not-coming/" component={RSVPNotComing}/>
        </Switch>
      </section>
    </div>
  </HashRouter>;
}
