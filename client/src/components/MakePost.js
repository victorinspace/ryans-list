// This is the page for creating 
// a new post.

import React, { Component } from 'react'
import { createListing } from '../actions/frontPageActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MakePost extends Component {

	state = {
		name: '',
		image: '',
		description: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
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
				<form onSubmit={this.handleSubmit}><input type="text"/>
					<input type="text" name="name" 
									onChange={this.handleChange} 
									value={this.state.name} />
					<input type="text" name="image" 
									onChange={this.handleChange} 
									value={this.state.image} />
					<input type="text" name="description" 
									onChange={this.handleChange} 
									value={this.state.description} />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default MakePost