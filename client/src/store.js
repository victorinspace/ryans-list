import { createStore } from 'redux'
import frontPageReducer from './reducers/frontPageReducer'

const store = createStore(frontPageReducer)

export default store