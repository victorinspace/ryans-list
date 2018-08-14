import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'


// **** 
// IMPORT PAGES 
// ****

import MainPage from './MainPage'

// View Listings and Created Posts
import HeaderListings from './HeaderListings'
import Listings from './Listings'

// Show Individual Post
import ShowPost from './ShowPost'

// Creating Posts
import CreateListing from './CreateListing'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      	<Router>
					<div>
	      		<Route exact path={'/'} component={MainPage} />

	      		{/* Gather Listings */}
	      		<Route path={'/all-listings/:id'} component={HeaderListings} />
	      		<Route path={'/listings/:id'} component={Listings} />
	      		<Route path={'/post/:id'} component={ShowPost} />

	      		{/* Creating Posts */}
	      		<Route path={'/listings/:id/createlisting'} component={CreateListing} />
					</div>
      	</Router>
      </Provider>
    )
  }
}

export default App