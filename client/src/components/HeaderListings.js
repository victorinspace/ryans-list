// This page displays all of the categories associated
// with the "main-category" or "header category"

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
				{this.props.headerListings.map( data => (
					<div key={data.id}>
						<Link to={`/makepost/${data.parent_id}`}>Make Post</Link>
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