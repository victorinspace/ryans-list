// This is the page for creating 
// a new post.

import React, { Component } from 'react'
import { getMainCats } from '../actions/frontPageActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class FirstPostPage extends Component {

	componentDidMount() {
		getMainCats(this.props.match.params.id)
	}

	render() {
		return (
			<div>
				<input type="text"/>
				<input type="text"/>
				<input type="text"/>
				<button type="submit">Submit</button>
			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		mainCats: appState.mainCats
	}
}

export default connect(mapStateToProps)(FirstPostPage)