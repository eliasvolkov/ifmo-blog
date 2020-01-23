import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from "./components/Header";
import { Index } from "./pages";
import { CreatePost } from "./pages/CreatePost";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/posts" component={Index} />
        <Route exact path="/posts/create" component={CreatePost} />
        <Redirect exact from='/' to='/posts' />
      </Switch>
    </Router>

  );
}

export default App;
