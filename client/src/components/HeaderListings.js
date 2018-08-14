// This page displays all of the categories associated
// with the "main-category" or "header category".
// It will show every listing associated with 
// it's category.

// We can also access the posting page from here.

import React, { Component } from 'react'
import { getHeaderListings } from '../actions/frontPageActions.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class HeaderListings extends Component {

	componentDidMount() {
		getHeaderListings(this.props.match.params.id)	
	}

	render() {
		return (
			<div>
				<Link to={`/makepost/`}>Make Post</Link>

				{this.props.headerListings.map( data => (
					<div className="single-listing" key={data.id}>
						<div>
							<Link to={`/post/${data.id}`}>{data.name}</Link>
						</div>
					</div>
				))}

			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		headerListings: appState.headerListings
	}
}

export default connect(mapStateToProps)(HeaderListings)