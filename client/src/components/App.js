import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

// **** 
// IMPORT PAGES 
// ****
import MainPage from './MainPage'
import HeaderListings from './HeaderListings'
import Listings from './Listings'
import ShowPost from './ShowPost'
import CreateListing from './CreateListing'
import Thumbnail from './Thumbnail'
import Gallery from './Gallery'


class App extends Component {
  render () {
    return (
      <Provider store={store}>
      	<Router>
					<div>
	      		<Route exact path={'/'} component={MainPage} />

	      		{/* Gather Listings */}
	      		<Route path={'/all-listings/:id'} component={HeaderListings} />
	      		<Route exact path={'/listings/:id'} component={Listings} />
	      		<Route path={'/post/:id'} component={ShowPost} />
	      		<Route path={'/thumbnail/:id'} component={Thumbnail} />
	      		<Route path={'/galleryview/:id'} component={Gallery} />

	      		{/* Creating Posts */}
	      		<Route path={'/listings/:id/createlisting'} component={CreateListing} />
					</div>
      	</Router>
      </Provider>
    )
  }
}

export default App