import React, { Component } from "react";

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './component/index'
// import Login from './component/loginPage/login'
import Register from './component/loginPage/register'
import Login from './component/loginPage/login'
// import Carousel from './component/homePage/carousel'
// import Navbar from './component/homePage/NavBar'
// import sidebar from './component/homePage/sidebar'
// import addModal from './component/homePage/addModal'
import MainPage from './component/homePage/mainPage'
import BookDetails from './component/detailPage/detailPage'

// import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Login/> */}
        <Router>
          <Route path="/" exact render={(props) => (<Main {...props} />)} />
          <Route path="/login" render={(props) => (<Login {...props} />)} />
          <Route path="/mainpage" render={(props) => (<MainPage {...props} />)} />
          <Route path="/register" render={(props) => (<Register {...props} />)} />
          <Route path={"/books/:id"} component={BookDetails} />
        </Router>
      </div>
    );
  }
}

export default App;
