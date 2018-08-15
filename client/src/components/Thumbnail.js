import React, { Component } from 'react'
import { getListings } from '../actions/frontPageActions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Thumbnail extends Component {

	componentDidMount() {
		getListings(this.props.match.params.id)	
	}

	render() {
		return (
			<div>
				<div className="thumbnail-view-container">
					<Link to={`/`}><h1>Ryan's List</h1></Link>
					
					<div className="viewing-menu">
						<Link to={`/listings/${this.props.match.params.id}`}>List View</Link>
						<Link to={`/galleryview/${this.props.match.params.id}`}>Gallery</Link>
						<Link to={`/listings/${this.props.match.params.id}/createlisting`}>Make Post</Link>
					</div>

					{this.props.listings.map(data => (
						<div key ={data.id}>
							<Link to={`/post/${data.id}`}>
								<div>
									<img className="thumbnail-image" src={data.image} alt=""/>
								</div>
							</Link>
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

export default connect(mapStateToProps)(Thumbnail)