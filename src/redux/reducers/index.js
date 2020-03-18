import { combineReducers } from 'redux'
import bookReducers from './books'

const reducers = combineReducers({
    book: bookReducers
})

export default reducers