import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe.js';
import Projects from './components/pages/Projects.js';
import Resume from './components/pages/Resume.js';
import Contact from './components/pages/Contact.js';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
