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

export function getListings(id) {
	axios.get(`/api/listings/${id}`).then(resp => {
		store.dispatch({
			type: 'GET_LISTINGS',
			payload: resp.data
		})
	})
}

export function getFirstPostPage() {
	axios.get(`/api/posting/`).then(resp => {
		store.dispatch({
			type: 'GET)PAGE',
			payload: resp.data
		})
	})
}

export function postOne() {
	axios.post(`api/posting`).then(resp => {
		store.dispatch({
			type: 'POST_MAIN_CAT'
		})
	})
}