import React, { Component } from 'react'

class Posting extends Component {
	render() {
		return (
			<div>
				{/* Posting Title, Price, Specific Location, Postal Code */}
				<div>
					<input type="text"/>
					<input type="text"/>
					<input type="text"/>
					<input type="text"/>
				</div>

				{/* Posting Body */}
				<div>
					<input type="text"/>
				</div>

				{/* Posting Details */}
				<div>
					<input type="text"/>
					<input type="text"/>
					<input type="text"/>
				</div>
				
				{/* Location Info */}
				<div>
					<input type="text"/>
					<input type="text"/>
					<input type="text"/>
				</div>

				<button>continue</button>
			</div>
		)
	}
}

export default Posting