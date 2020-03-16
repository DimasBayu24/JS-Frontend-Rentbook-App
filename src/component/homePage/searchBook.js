import React, { Component } from 'react'
import Axios from 'axios'
const URL_STRING = "/api/v1/search"

class SearchBook extends Component {
    state = {
        library: []
    }

    getData = () => {
        Axios.get(URL_STRING)
            .then(({ data }) => {
                this.setState({
                    library: data.result
                })
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getData();
    }

