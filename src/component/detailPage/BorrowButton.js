import React from "react";
import Axios from "axios";
class BorrowButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.data.id,
      img: props.data.img,
      availability: props.data.availability,
      loading: false
    };
  }

  rentBookData = () => {
    // const { available } = this.state;
    const rentBook = {
      availability: "false"
    };

    Axios.patch(`/api/v1/rent/${this.state.id}`, rentBook)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  returnBookData = () => {
    // const { available } = this.state;
    const rentBook = {
      availability: "true"
    };

    Axios.patch(`/api/v1/return/${this.state.id}`, rentBook)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const bookAvailability = this.state.availability;
    let buttonStatus;
    if (bookAvailability === "true") {
      buttonStatus = <button onClick={this.rentBookData}>Borrow</button>;
    } else {
      buttonStatus = (
        <button
          style={{ backgroundColor: "#596A55" }}
          onClick={this.returnBookData}
        >
          Return
        </button>
      );
    }
    return (
      <div>
        <section className="borrow-button-container">
          <aside className="aside-items">
            <div className="book-cover-img">
              <img src={this.state.img} alt="book-cover.img" />
            </div>
            <form>
              <div className="borrow-btn">{buttonStatus}
              </div></form>
          </aside>
        </section>
      </div>
    );
  }
}

export default BorrowButton;
