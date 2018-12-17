import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import MainBar from './MainBar';
import Page from './Page';
import '../assets/styles/index.scss'
import RouterExample from './RouterLinkExample';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <CssBaseline />
        <MainBar />
        <Switch>
          <Route exact path="/routerlinkexample" component={RouterExample} />
          <Route exact path ='/' component={Page}/>
        </Switch>
      </div>
    )
  }
}