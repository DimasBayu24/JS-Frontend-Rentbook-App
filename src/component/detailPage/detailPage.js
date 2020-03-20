import React from "react";
import "./detailPage.css";
import BookDetailNavbar from "./BookDetailNavbar";
import BookContent from "./BookContent";
import BorrowButton from "./BorrowButton";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { getBookById } from '../../redux/actions/detail'
import { connect } from 'react-redux'

const mapStateToProps = (detail) => {
  return {
    detail
  }
}

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      id: props.match.params.id
    };
  }

  getBookById = async () => {
    await this.props.dispatch(getBookById(this.state.id))
    console.log(this.props.data)
    this.setState({
      book: this.props.detail.detail.detailData
    })
  };

  componentDidMount = () => {
    this.getBookById();
  };

  render() {
    const { book } = this.state;
    console.log(book);
    return (
      <div className="grid-container">
        {book &&
          book.map((item, index) => (
            <div key={index}>
              <BookDetailNavbar data={item} />
              <div className="grid-templates-content">
                <BookContent
                  data={item}
                />
                <BorrowButton data={item} />
              </div>
              <EditModal data={item} />
              <DeleteModal data={item} />
            </div>
          ))}
        <div style={{ marginTop: "60px" }}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(BookDetails);
