import React, { Component } from 'react'
import { getMainCats } from '../actions/frontPageActions'
import { connect } from 'react-redux'

class FirstPostPage extends Component {

	componentDidMount() {
		getMainCats()
	}

	render() {
		return (
			<div>
				{this.props.mainCats.map(data => (
					<div>
						<Link>{data.name}</Link>
					</div>
				))}
			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		mainCats: appState.mainCats
	}
}

export default connect(mapStateToProps)(Listings)