const intitialState = {
	categories: [],
	listings: []
}

export default function (state = intitialState, action) {
	switch(action.type) {
		case 'GET_CATS':
			return {...state, categories: action.payload}
		case 'GET_LISTINGS':
			return {...state, listings: action.payload}
		default:
			return state
	}
}