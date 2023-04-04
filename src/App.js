import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe.js';
import Projects from './components/pages/Projects.js';
import Resume from './components/pages/Resume.js';
import Contact from './components/pages/Contact.js';
import Header from './components/Header';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="bg-slate-800 min-h-screen pb-6">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
