import React from "react";
import Navbar from "./NavBar"
import CardBook from "./cardBook"
import CarouselComponent from "./carousel"
import Sidebar from "./sidebar"
import AddModal from "./addModal"
import "./mainPage.css"



class MainPage extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.history.push('/mainpage')
    } else {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div>
        <div className="grid-container" id="main">
          <Navbar />
          <CarouselComponent />
          <h1 style={{ marginLeft: '350px' }} >Book List</h1>
          <div className="cardBookContainer">
            <CardBook />
          </div>
        </div>
        <Sidebar />
        <AddModal />
      </div>
    );
  };
}

export default MainPage;