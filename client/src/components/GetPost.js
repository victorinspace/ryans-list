// Display individual posts

import React, { Component } from 'react'
import { getPost } from '../actions/frontPageActions.js'
import { connect } from 'react-redux'

class GetPost extends Component {

	componentDidMount() {
		getPost(this.props.match.params.id)
	}

	render() {
		return (
			<div>
				{this.props.post.map( data => (
					<div key={data.id}>
						<div>{data.name}</div>
						<img src={data.image} alt=""/>
						<div>{data.description}</div>
					</div>
				))}
			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		post: appState.post
	}
}

export default connect(mapStateToProps)(GetPost)