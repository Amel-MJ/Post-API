import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from '../component/details'
import Posts from '../component/posts'
import Home from '../component/home'

export default class Routeur extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/user/:id/posts/:idPost/" component={Details} />
            <Route exact path="/user/:id/posts" component={Posts} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
