import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HashRouter, Router, IndexRoute } from 'react-router-dom'
import Navbar from '../../components/Layout/Navbar'

import { Home, NotFound } from '../'
import HomePage from '../../components/HomePage'
import NeimanProduct from '../../components/NeimanProduct'
import NeimanBelts from '../../components/NeimanBelts'
import NeimanWatches from '../../components/NeimanWatches'
import SaksBelts from '../../components/SaksBelts'
import SaksWatches from '../../components/SaksWatches'
import Compare from '../../components/Compare'
import '../../components/Layout/Navbar.css'


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container mt-4">
          <Switch history={HashRouter}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/products" component={Home}> </Route>
            <Route path="/productsNeiman" component={NeimanProduct}> </Route>
            <Route path="/neimanBelts" component={NeimanBelts}> </Route>
            <Route path="/neimanWatches" component={NeimanWatches}> </Route>
            <Route path="/saksBelts" component={SaksBelts}> </Route>
            <Route path="/saksWatches" component={SaksWatches}> </Route>
            <Route path="/compare" component={Compare}> </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
