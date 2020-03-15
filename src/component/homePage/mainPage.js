import React from "react";
import Navbar from "./NavBar"
import CardBook from "./cardBook"
import CarouselComponent from "./carousel"
// import HomeHeader from "../../Components/Header/HomeHeader";
// import HomeCardList from "../../Components/Card/HomeCardList";
import Sidebar from "./sidebar"
import AddModal from "./addModal"
import "./mainPage.css"
const MainPage = () => {
  return (
    <div>
      <div className="grid-container" id="main">
        <Navbar />
        <CarouselComponent />
        <h1 style={{ marginLeft: '350px' }} >Book List</h1>
        <div className="cardBookContainer">
          <CardBook />
        </div>
        {/* <HomeCardList /> */}
      </div>
      <Sidebar />
      <AddModal />
    </div>
  );
};

export default MainPage;