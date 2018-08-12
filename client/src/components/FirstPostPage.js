import React, { Component } from 'react'
import { getFirstPostPage, postOne } from '../actions/frontPageActions'
import { connect } from 'react-redux'

class FirstPostPage extends Component {

	componentDidMount() {
		getFirstPostPage()

		this.state = {
			value: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		})
	}

	handleSubmit = (e) => {
		postOne(this.state.value)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.props.firstPostPage.map( (data, i) => (
					<div key={`cat-${i}`}>
						<input type="radio" 
										name="category" 
										id={data.category} 
										value={data.id} 
										onChange={this.handleChange} />
						<label htmlFor={data.category}>{data.category}</label>
					</div>
				))}
				<input type="submit" name="category" />
			</form>
		)
	}
}

function mapStateToProps(appState) {
	return {
		firstPostPage: appState.firstPostPage
	}
}

export default connect(mapStateToProps)(FirstPostPage)