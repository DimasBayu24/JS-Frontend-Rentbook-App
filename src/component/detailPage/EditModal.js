import React from "react";
import "./EditModal.css";
import { connect } from 'react-redux'
import { updateBook } from '../../redux/actions/detail'

const mapStateToProps = (detail) => {
  return {
    detail
  }
}

class editModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.data.id,
      title: props.data.title,
      description: props.data.description,
      daterelease: props.data.daterelease,
      img: props.data.img,
      genre: props.data.genre,
      availability: props.data.availability,
    };
  }

  updateBookData = () => {
    const {
      title,
      description,
      img,
      daterelease,
      genre,
      availability
    } = this.state;

    const updatedBook = {
      title,
      daterelease,
      img,
      description,
      availability,
      genre
    };
    console.log(updatedBook);

    this.props.dispatch(updateBook(this.state.id, updatedBook))
  };


  render() {

    return (
      <div id="editModal" className="edit-modal">
        <div className="edit-modal-content">
          <div className="edit-modal-header">
            <span className="close">&times;</span>
            <p>Edit Data</p>
          </div>
          <div className="edit-modal-body">
            <div className="form-wrapper">
              <form action="">
                <div className="row">
                  <div className="col-20">
                    <label htmlFor="image-url">URL Image</label>
                  </div>
                  <div className="col-80">
                    <input
                      value={this.state.img}
                      type="text"
                      id="imageURL"
                      name="imageURL"
                      placeholder="Book's URL Image Cover"
                      onChange={e => {
                        this.setState({ img: e.target.value });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-20">
                    <label htmlFor="book-title">Released Date</label>
                  </div>
                  <div className="col-80">
                    <input
                      type="text"
                      id="bookDate"
                      name="bookDate"
                      placeholder="Book's Date"
                      required
                      value={this.state.daterelease}
                      onChange={e => {
                        this.setState({ daterelease: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-20">
                    <label htmlFor="book-title">Title</label>
                  </div>
                  <div className="col-80">
                    <input
                      type="text"
                      id="bookTitle"
                      name="bookTitle"
                      placeholder="Book's Title"
                      required
                      value={this.state.title}
                      onChange={e => {
                        this.setState({ title: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-20">
                    <label htmlFor="book-title">Genre</label>
                  </div>
                  <div className="col-80">
                    <input
                      type="text"
                      id="bookGenre"
                      name="bookGenre"
                      placeholder="Book's Genre"
                      required
                      value={this.state.genre}
                      onChange={e => {
                        this.setState({ genre: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-20">
                    <label htmlFor="book-description">Description</label>
                  </div>
                  <div className="col-80">
                    <textarea
                      required
                      id="description"
                      name="description"
                      placeholder="Book's Description"
                      style={{ height: "200px" }}
                      value={this.state.description}
                      onChange={e => {
                        this.setState({ description: e.target.value });
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <button onClick={this.updateBookData} type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(editModal);