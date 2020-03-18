import Axios from 'axios'

const URL_STRING = "/api/v1/"

export const getAllBook = () => {
    return {
        type: "GET_BOOK",
        payload: Axios.get(URL_STRING)
    }
}

export const getAvail = () => {
    return {
        type: "GET_AVAIL",
        payload: Axios.get(`${URL_STRING}availability/avail`)
    }
}

export const getSearch = (data) => {
    return {
        type: "GET_SEARCH",
        payload: Axios.get(`${URL_STRING}search/`, data)
    }
}

export const getBookById = id => {
    return {
        type: "GET_ID",
        payload: Axios.get(URL_STRING + id)
    }
}

export const getSortTitle = () => {
    return {
        type: "GET_TITLE",
        payload: Axios.get(`${URL_STRING}sortbook/title`)
    }
}

export const getSortDate = () => {
    return {
        type: "GET_DATE",
        payload: Axios.get(`${URL_STRING}sortdate/date`)
    }
}

export const getSortGenre = () => {
    return {
        type: "GET_GENRE",
        payload: Axios.get(`${URL_STRING}sortgenre/genre`)
    }
}

export const postNewBook = data => {
    return {
        type: "POST_BOOK",
        payload: Axios.post(`${URL_STRING}addbook`, data)
    }
}

export const rentBookRedux = (id, data) => {
    return {
        type: "PATCH_RENT",
        payload: Axios.patch(`${URL_STRING}rent/${id}`, data)
    }
}

export const returnBook = (id, data) => {
    return {
        type: "PATCH_RETURN",
        payload: Axios.patch(`${URL_STRING}return/${id}`, data)
    }
}

export const updateBook = (id, data) => {
    return {
        type: "PATCH_UPDATE",
        payload: Axios.patch(URL_STRING + id, data)
    }
}

export const deleteBook = id => {
    return {
        type: "DELETE_BOOK",
        payload: Axios.delete(URL_STRING + id)
    }
}



// export default postNewBook
// export default getAllBook