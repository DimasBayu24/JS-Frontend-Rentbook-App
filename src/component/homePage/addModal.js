import React, {Component} from 'react'
import "./addModal.css";

import Axios from 'axios'


const URL_STRING = "/api/v1/"
class AddModal extends Component {
    state = {
        title: "",
        description: "",
        img: "",
        daterelease: "",
        genre: "",
        availability: "true"
    }
addBook = () => {
 
    const { title, description, img, daterelease, genre, availability } = this.state
    const book = {
        title,
        description,
        img,
        daterelease,
        genre,
        availability
    }
    console.log(book)
    Axios.post(URL_STRING + 'addbook', book)
        .then(res => {
            console.log(res);
        })
}
render(){


    return (
        <div id="addModal" class="add-modal">
            <div className="add-modal-content">
                <div className="add-modal-header">
                    <span className="add-close">&times;</span>
                    <p>Add Data</p>
                </div>
                <div className="add-modal-body">
                    <div className="form-wrapper">
                        <form action="">
                            <div className="row">
                                <div className="col-20">
                                    <label for="image-url">Title</label>
                                </div>
                                <div className="col-80">
                                    <input type="text"
                                        onChange={(e) => {
                                            this.setState({
                                                title: e.target.value
                                            })
                                        }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-20">
                                    <label for="book-title">Description</label>
                                </div>
                                <div className="col-80">
                                    <input type="text"
                                        onChange={(e) => {
                                            this.setState({
                                                description: e.target.value
                                            })
                                        }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-20">
                                    <label for="book-description">Image URL</label>
                                </div>
                                <div className="col-80">
                                    <input type="text"
                                        onChange={(e) => {
                                            this.setState({
                                                img: e.target.value
                                            })
                                        }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-20">
                                    <label for="image-url">Release Date</label>
                                </div>
                                <div className="col-80">
                                    <input type="text"
                                        onChange={(e) => {
                                            this.setState({
                                                daterelease: e.target.value
                                            })
                                        }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-20">
                                    <label for="image-url">Genre</label>
                                </div>
                                <div className="col-80">
                                    <input type="text"
                                        onChange={(e) => {
                                            this.setState({
                                                genre: e.target.value
                                            })
                                        }} />
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-20">
                                    <label for="image-url">Availability</label>
                                </div>
                                <div className="col-80">
                                    <input type="text"
                                        onChange={(e) => {
                                            this.setState({
                                                availability: e.target.value
                                            })
                                        }} />
                                </div>
                            </div> */}
                            <div className="row">
                                <button type="submit" onClick={this.addBook}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
                                    }
}
export default AddModal