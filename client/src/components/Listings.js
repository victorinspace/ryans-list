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
				<div className="thumbnail-view-container">
					<Link to={`/`}><h1>Ryan's List</h1></Link>

					<div className="viewing-menu">
						<Link to={`/gallery/${this.props.match.params.id}`}>Gallery View</Link>
						<Link to={`/thumbnail/${this.props.match.params.id}`}>Thumbnail</Link>
						<Link to={`/listings/${this.props.match.params.id}/createlisting`}>Make Post</Link>
					</div>

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