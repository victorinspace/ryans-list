// Display individual posts

import React, { Component } from 'react'
import { getPost } from '../actions/frontPageActions.js'
import { connect } from 'react-redux'

class ShowPost extends Component {

	componentDidMount() {
		getPost(this.props.match.params.id)
	}

	render() {
		return (
			<div>

				<h1>Ryan's List</h1>

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

export default connect(mapStateToProps)(ShowPost)