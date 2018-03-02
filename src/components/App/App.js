import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LinkList from '../LinkList/LinkList';
import CreateLink from '../CreateLink/CreateLink'
import Header from "../Header/Header"

class App extends Component {
  render() {
    return (
      <div className="center w85" style={{ margin: "auto" }}>
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
