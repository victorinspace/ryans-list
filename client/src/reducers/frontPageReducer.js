const intitialState = {
	// main page
	categories: [],

	// viewing the listings
	listings: [],
	post: [],
	headerListings: []
}

export default function (state = intitialState, action) {
	switch(action.type) {
		case 'GET_CATS':
			return {...state, categories: action.payload}
		case 'HEADER_LISTINGS':
			return {...state, headerListings: action.payload}
		case 'GET_LISTINGS':
			return {...state, listings: action.payload}
		case 'GET_POST':
			return {...state, post: action.payload}
		default:
			return state
	}
}