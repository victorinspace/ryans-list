const intitialState = {
	categories: []
}

export default function (state = intitialState, action) {
	switch(action.type) {
		case 'GET_CATS':
			return {...state, categories: action.payload}
		default:
			return state
	}
}