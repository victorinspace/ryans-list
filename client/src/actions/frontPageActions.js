import axios from 'axios'
import store from '../store'

export function doItForTheGold() {
	axios.get('/api/categories').then(resp => {
		store.dispatch({
			type: 'GET_CATS',
			payload: resp.data
		})
	})
}
