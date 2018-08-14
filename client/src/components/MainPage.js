// This is the first page that displays 
// all of the categories available.
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCats } from '../actions/frontPageActions.js'

class MainPage extends Component {
	
	componentDidMount() {
		getCats()
	}
	
	render() {
		return (
			<div>
				<h1>Ryan's List</h1>

				<div className="main-page-listings">
					{this.props.categories.map( (mainDeets, i) => (
					/* Main Category */
						<div key={`main-${i}`}>
							<div className="main-cat">
								<Link to={`/all-listings/${mainDeets.id}`}>
									{mainDeets.category}
								</Link>
							</div>

							{mainDeets.sub.map( (subDeets, i) => (
								/* Sub-Category */
								<div className="sub-cat" key={`sub-${i}`}>
									<Link to={`/listings/${subDeets.id}`}>
										{subDeets.category}
									</Link>
								</div>
							))}
						</div>
					))}
				</div>
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