import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';
import HatchNavBar from './components/HatchNavBar/HatchNavBar';
import UserProfile from './components/UserProfile/UserProfile';
import UserListing from './components/UserListing/UserListing';

function App() {
  return (
    <div className="container-fluid p-0">
      <HatchNavBar></HatchNavBar>
      <Router>
        <div>
          <Route exact path="/"> <Redirect to="/users" /> </Route>
          <Route exact path="/users" component={UserListing} />
          <Route path="/users/:id" component={UserProfile} />
        </div>
      </Router>
    </div>
  );
}

export default App;
