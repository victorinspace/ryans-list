// This page will display all of the "sub-categories"
// available through selecting the "main-category",
// or "header category"

import React, { Component } from 'react'
import { getListings } from '../actions/frontPageActions.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Listings extends Component {

	componentDidMount() {
		getListings(this.props.match.params.id)
	}

	render() {
		return (
			<div>
				{this.props.listings.map(data => (
					<div key={data.id}>
						<Link to={`/post/${data.id}`}>
							{data.name}
						</Link>
					</div>
				))}
			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		listings: appState.listings
	}
}

export default connect(mapStateToProps)(Listings)