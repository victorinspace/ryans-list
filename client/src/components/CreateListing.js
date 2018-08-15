// This is the page for creating 
// a new post.

import React, { Component } from 'react'
import { createListing } from '../actions/frontPageActions'

class CreateListing extends Component {

	state = {
		name: '',
		image: '',
		description: ''
	}

	componentDidMount() {
		console.log('test')	
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		createListing({
			name: this.state.name,
			image: this.state.image,
			description: this.state.description,
			child_id: this.props.match.params.id
		})
	}

	render() {
		return (
			<div>
				<div className="thumbnail-view-container">
					<h1>Ryan's List</h1>

					<form className="form-container" onSubmit={this.handleSubmit}>
						<label name="title">Title:</label>
						<input type="text" name="name" 
										onChange={this.handleChange} 
										value={this.state.name} />

						<label name="image">Image:</label>
						<input type="text" name="image" 
										onChange={this.handleChange} 
										value={this.state.image} />

						<label name="description">Description:</label>
						<input className="description" type="text" name="description" 
										onChange={this.handleChange} 
										value={this.state.description} />

						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

export default CreateListing