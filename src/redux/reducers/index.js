import { combineReducers } from 'redux'
import bookReducers from './books'
import userReducers from './users'
import detailReducers from './detail'

const reducers = combineReducers({
    book: bookReducers,
    user: userReducers,
    detail: detailReducers
})

export default reducers