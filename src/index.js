import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss?v=1.2.0';
import 'assets/demo/demo.css?v=1.2.0';
// pages
import LandingPage from 'views/main/LandingPage.js';
import AboutPage from 'views/main/AboutPage.js';
import Contact from 'views/main/Contact.js';
import Projects from 'views/main/Projects.js';
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <LandingPage {...props} />} />
      <Route path="/about" render={(props) => <AboutPage {...props} />} />
      <Route path="/contact" render={(props) => <Contact {...props} />} />
      <Route path="/projects" render={(props) => <Projects {...props} />} />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
