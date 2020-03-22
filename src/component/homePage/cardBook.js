import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Truncate from 'react-truncate';
import { connect } from 'react-redux'
import { getAllBook } from '../../redux/actions/books'
import './pagination.css'
const mapStateToProps = (book) => {
  return {
    book
  }
}

class CardBook extends Component {
  state = {
    limit: 6,
    library: [],
    pageNumber: 1
  }

  getData = async () => {

    await this.props.dispatch(getAllBook(this.state.pageNumber))
    this.setState({
      library: this.props.book.book.bookData
    })
  }

  prevHandlerButton = async () => {
    if (this.state.pageNumber > 1) {
      const pageNumberState = this.state.pageNumber - 1;
      await this.setState({
        pageNumber: pageNumberState
      })
      this.props.dispatch(getAllBook(this.state.pageNumber))
    }
  }

  nextHandlerButton = async () => {
    if (this.state.pageNumber <= Math.ceil(this.props.book.book.bookData.length / this.state.limit)) {
      const pageNumberState = this.state.pageNumber + 1;
      await this.setState({
        pageNumber: pageNumberState
      })
      this.props.dispatch(getAllBook(this.state.pageNumber))
    }
  }

  componentDidMount = () => {
    this.getData();
  }



  render() {

    return (
      <div>
        <div class="pagination">
          <p onClick={this.prevHandlerButton}>≤</p>
          <p>{this.state.pageNumber}</p>

          <p onClick={this.nextHandlerButton}>≥</p>
        </div>
        <div className="cardContainer">
          {this.props.book.book.bookData.length < 1 ?
            (
              <div>
                data kosong
              </div>
            ) :
            this.props.book.book.bookData.map((item, index) => (
              <Link to={{ pathname: `/books/${item.id}`, book: item }}>
                <div className="cardWrapper" key={index}>
                  <img className="cardImg" src={item.img} alt="" />
                  <h1>{item.title}</h1>
                  <p>
                    <Truncate
                      lines={2}
                      ellipsis={
                        <span>
                          ...{" "}
                          <span style={{ color: "gray", fontSize: "16px" }}>

                          </span>
                        </span>
                      }
                    >
                      {item.description}
                    </Truncate>
                  </p>
                </div>

              </Link>

            ))}
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps)(CardBook);