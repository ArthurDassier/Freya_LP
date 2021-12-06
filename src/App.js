import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './index.css'
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Team from './components/pages/Team';
import Mission from './components/pages/Mission';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/team' component={Team} />
          <Route path='/mission' component={Mission} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
