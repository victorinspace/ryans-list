import React, { Component } from 'react'
import { getListings } from '../actions/frontPageActions'
import { Link } from 'react-router-dom'

class Gallery extends Component {

	componentDidMount() {
		getListings(this.props.match.params.id)	
	}
	
	render() {
		return (
			<div>
				<div className="thumbnail-view-container">
					<Link to={`/listings/${this.props.match.params.id}`}>List View</Link>
					<Link to={`/thumbnail/${this.props.match.params.id}`}>Thumbnail</Link>
					<Link to={`/listings/${this.props.match.params.id}/createlisting`}>Make Post</Link>
				</div>

				{this.props.listings.map(data => (
					<div>
						<Link to={`/specificlisting/${data.id}`}>
							<img src={data.image} alt=""/>
							<div>
								{data.name}
							</div>
						</Link>
					</div>
				))}
			</div>
		)
	}
}

export default Gallery