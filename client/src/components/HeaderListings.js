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
						<Link to={`/post/${data.id}`}>{data.name}</Link>
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