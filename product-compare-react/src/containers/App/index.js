import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HashRouter, Router, IndexRoute } from 'react-router-dom'

import { Home, NotFound } from '../'
import HomePage from '../../components/HomePage'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container mt-4">
          <Switch history={HashRouter}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/products" component={Home}> </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
