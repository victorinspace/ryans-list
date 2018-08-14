import axios from 'axios'
import store from '../store'

// Get All Categories for Main Page
export function getCats() {
	axios.get('/api/categories').then(resp => {
		store.dispatch({
			type: 'GET_CATS',
			payload: resp.data
		})
	})
}

// Get Listings for Main Categories
export function getHeaderListings(id) {
	axios.get('/api/all-listings/' + id).then(resp => {
		store.dispatch({
			type: "HEADER_LISTINGS",
			payload: resp.data
		})
	})
}

// Get Listings for Sub-Categories
export function getListings(id) {
	axios.get('/api/listings/' + id).then(resp => {
		store.dispatch({
			type: 'GET_LISTINGS',
			payload: resp.data
		})
	})
}

// Get Individual Post
export function getPost(id) {
	axios.get('/api/post/' + id).then(resp => {
		store.dispatch({
			type: 'GET_POST',
			payload: resp.data
		})
	})
}

export function createListing(listing) {
	console.log(listing)
	axios.post('/api/makepost', listing).then(resp => {
		console.log(resp)
	})
}	
