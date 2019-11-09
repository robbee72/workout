import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';

import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import Fat from '../components/Fat';
import AboutPage from '../components/information/AboutPage';
import ContactPage from '../components/information/ContactPage';
import TheCell from '../components/TheCell';
import Philosphy from '../components/Philosphy';
import Secret from '../components/Secret';
import Calories from '../components/Calories';
import Food from '../components/Food';
import Exercise from '../components/Exercise';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/landing" component={LandingPage} />
            <Route path="/fat" component={Fat} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thecell" component={TheCell} />
            <Route path="/philosphy" component={Philosphy} />
            <Route path="/secret" component={Secret} />
            <Route path="/calories" component={Calories} />
            <Route path="/food" component={Food} />
            <Route path="/exercise" component={Exercise} />

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
