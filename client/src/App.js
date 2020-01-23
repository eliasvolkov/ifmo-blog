import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/posts" render={() => <h1>Posts</h1>} />
          <Redirect exact from='/' to='/posts' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
