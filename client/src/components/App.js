import React, { Component } from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

// **** IMPORT PAGES ****
import MainPage from './MainPage'

// Listings and Created Posts
import HeaderListings from './HeaderListings'
import Listings from './Listings'
import GetPost from './GetPost'

// Creating Posts
import MakePost from './MakePost'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      	<Router>
	      	<Switch>
	      		<Route exact path={'/'} component={MainPage} />

	      		{/* Gather Listings */}
	      		<Route path={'/all-listings/:id'} component={HeaderListings} />
	      		<Route path={'/listings/:id'} component={Listings} />
	      		<Route path={'/post/:id'} component={GetPost} />

	      		{/* Creating Posts */}
	      		<Route path={'/all-listings/:id/makepost/'} component={MakePost} />
	      	</Switch>
      	</Router>
      </Provider>
    )
  }
}

export default App