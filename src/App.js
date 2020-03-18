import React, { Component } from "react";

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './component/index'
import Register from './component/loginPage/register'
import Login from './component/loginPage/login'
import MainPage from './component/homePage/mainPage'
import BookDetails from './component/detailPage/detailPage'

class App extends Component {
  render() {
    return (
      <div>
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
