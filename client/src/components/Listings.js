import React, { Component } from 'react'
import { getListings } from '../actions/frontPageActions.js'
import { connect } from 'react-redux'

class Listings extends Component {

	componentDidMount() {
		getListings(this.props.match.params.child_id)
	}

	render() {
		return (
			<div>
				{this.props.listings.map( listings => (
					<div key={listings.id}>
						{listings.name}
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