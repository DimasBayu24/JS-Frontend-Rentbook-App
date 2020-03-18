const initialValue = {
    bookData: [],
    errMsg: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false
}

const bookReducers = (state = initialValue, action) => {
    switch (action.type) {
        case "GET_BOOK_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "GET_BOOK_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                ierrMsg: action.payload.data
            }
        case "GET_BOOK_FULFILLED":
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: action.payload.data.result
            }
        case "GET_AVAIL_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "GET_AVAIL_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                ierrMsg: action.payload.data
            }
        case "GET_AVAIL_FULFILLED":
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: action.payload.data.result
            }
        case "GET_SEARCH_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "GET_SEARCH_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                ierrMsg: action.payload.data
            }
        case "GET_SEARCH_FULFILLED":
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: action.payload.data.result
            }
        case "GET_ID_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "GET_ID_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                ierrMsg: action.payload.data
            }
        case "GET_ID_FULFILLED":
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: action.payload.data.result
            }
        case "GET_TITLE_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "GET_TITLE_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                ierrMsg: action.payload.data
            }
        case "GET_TITLE_FULFILLED":
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: action.payload.data.result
            }
        case "GET_DATE_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "GET_DATE_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                ierrMsg: action.payload.data
            }
        case "GET_DATE_FULFILLED":
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: action.payload.data.result
            }
        case "GET_GENRE_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "GET_GENRE_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                ierrMsg: action.payload.data
            }
        case "GET_GENRE_FULFILLED":
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: action.payload.data.result
            }
        case "POST_BOOKS_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "POST_BOOKS_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                errMsg: action.payload.data
            }
        case "POST_BOOK_FULFILLED":
            state.bookData.push(JSON.parse(action.payload.config.data))
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: state.bookData
            }
        case "PATCH_RENT_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "PATCH_RENT_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                errMsg: action.payload.data
            }
        case "PATCH_RENT_FULFILLED":
            state.bookData.push(JSON.parse(action.payload.config.data))
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: state.bookData
            }
        case "PATCH_RETURN_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "PATCH_RETURN_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                errMsg: action.payload.data
            }
        case "PATCH_RETURN_FULFILLED":
            state.bookData.push(JSON.parse(action.payload.config.data))
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: state.bookData
            }
        case "PATCH_UPDATE_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "PATCH_UPDATE_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                errMsg: action.payload.data
            }
        case "PATCH_UPDATE_FULFILLED":
            state.bookData.push(JSON.parse(action.payload.config.data))
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: state.bookData
            }
        case "DELETE_BOOK_PENDING":
            return {
                ...state,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
        case "DELETE_BOOK_REJECTED":
            return {
                ...state,
                isPending: false,
                isRejected: true,
                errMsg: action.payload.data
            }
        case "DELETE_BOOK_FULFILLED":
            state.bookData.push(JSON.parse(action.payload.config.data))
            return {
                ...state,
                isPending: false,
                isFulfilled: true,
                bookData: state.bookData
            }
        default:
            return state
    }
}

export default bookReducers