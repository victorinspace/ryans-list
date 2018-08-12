import React, { Component } from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

// IMPORT PAGES
import MainPage from './MainPage'
import Listings from './Listings'
import GetPost from './GetPost'
import HeaderListings from './HeaderListings'
import FirstPostPage from './FirstPostPage'
import SecondPostPage from './SecondPostPage'
import ThirdPostPage from './ThirdPostPage'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      	<Router>
	      	<Switch>
	      		<Route exact path={'/'} component={MainPage} />
	      		<Route path={'/listings/:id'} component={Listings} />
	      		<Route path={'/post/:id'} component={GetPost} />
	      		<Route path={'/all-listings/:id'} component={HeaderListings} />
	      		<Route path={'/post1/'} component={FirstPostPage}></Route>
	      		<Route path={'/post2/'} component={SecondPostPage}></Route>
	      		<Route path={'/post3/'} component={ThirdPostPage}></Route>
	      	</Switch>
      	</Router>
      </Provider>
    )
  }
}

export default App