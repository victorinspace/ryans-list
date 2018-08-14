// This page will display all of the "sub-categories"
// available through selecting the "main-category",
// or "header category"

// We can also access posting page from here
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

				<h1>Ryan's List</h1>

				<Link to={`/listings/${this.props.match.params.id}/createlisting`}>Make Post</Link>

				{this.props.listings.map(data => (
					<div className="single-listing" key={data.id}>
						<div >
							<Link to={`/post/${data.id}`}>
								{data.name}
							</Link>
						</div>
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