import Axios from 'axios'

const URL_STRING = "/api/v1/user/"

export const register = (data) => {
    return {
        type: "REGISTER",
        payload: Axios.post(`${URL_STRING}register`, data)
    }
}

export const login = (data) => {
    return {
        type: "LOGIN",
        payload: Axios.post(`${URL_STRING}login`, data)
    }
}