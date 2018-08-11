import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { doItForTheGold } from '../actions/frontPageActions.js'
import { connect } from 'react-redux'

class MainPage extends Component {
	
	componentDidMount() {
		doItForTheGold()
	}
	
	render() {
		return (
			<div>
				{this.props.categories.map( (mainDeets, i) => (
					<div key={`main-${i}`}>
						<div className="main-cat">
							<a href="#">{mainDeets.category}</a>
						</div>
							{mainDeets.sub.map( (subDeets, i) => (
								<div className="sub-cat" key={`sub-${i}`}>
									<Link to={`/listings/${subDeets.id}`}>{subDeets.category}</Link>
								</div>
							))}
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