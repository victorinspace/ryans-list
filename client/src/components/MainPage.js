import React, { Component } from 'react'
import { doItForTheGold } from '../actions/frontPageActions.js'
import { connect } from 'react-redux'

class MainPage extends Component {
	
	componentDidMount() {
		doItForTheGold()	
	}
	
	render() {
		return (
			<div>
				{this.props.categories.map( data => (
					<div className="thing" key={data.id}>
						{data.category}
					</div>
				))}	
			</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		categories: appState.categories
	}
}

export default connect(mapStateToProps)(MainPage)