import React, { Component } from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

import MainPage from './MainPage'
import Posting from './Posting'
import Listings from './Listings'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      	<Router>
	      	<Switch>
	      		<Route exact path={'/'} component={MainPage} />
						<Route path={'/postings'} component={Posting} />
	      		<Route path={'/listings/:id'} component={Listings} />
	      	</Switch>
      	</Router>
      </Provider>
    )
  }
}

export default App