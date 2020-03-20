import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Truncate from 'react-truncate';
import { connect } from 'react-redux'
import { getAllBook } from '../../redux/actions/books'

const mapStateToProps = (book) => {
  return {
    book
  }
}

class CardBook extends Component {
  state = {
    library: []
  }

  getData = async () => {
    await this.props.dispatch(getAllBook())
    this.setState({
      library: this.props.book.book.bookData
    })
  }
  componentDidUpdate = () => {
    console.log('kontol ', this.props.book)

    this.state.library = this.props.book.book.bookData

  }
  componentDidMount = () => {
    this.getData();
  }

  render() {
    const { library } = this.state
    console.log("data from library state ", library)
    return (
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
    )
  }
}

export default connect(mapStateToProps)(CardBook);