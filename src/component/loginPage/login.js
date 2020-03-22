import React, { Component } from 'react'
import './login.css'
import { Link } from "react-router-dom";
import { login } from '../../redux/actions/users'
import { connect } from 'react-redux'

const mapStateToProps = (user) => {
    return {
        user
    }
}

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    loginId = () => {

        const { username, password } = this.state
        const user = {
            username,
            password
        }
        this.props.dispatch(login(user, this.props.history))

    }

    render() {
        return (
            <div className="container">
                <div className="backgroundImgSection">
                    <img className="backgroundImg" src={require('../../storage/img/loginPageLibrary.png')} />
                    <h1 className="textHeading">Book is a window to the world</h1>
                    <div className="textSource">Photo by Mark Pan4ratte on Unsplash</div>
                </div>
                <div className="loginForm">
                    <img className="bookshelfLogo" src={require('../../storage/img/bookshelfLogo.png')} />
                    <h3 className="textLogin">Login</h3>
                    <p className="sentenceLoginSmall">Welcome Back, Please Login to your account</p>
                    <div class="input-box">
                        <div class="box-username">
                            <p class="username">Username</p>
                            <input type="text"
                                onChange={(e) => {
                                    this.setState({
                                        username: e.target.value
                                    })
                                }} />
                        </div>
                        <div class="box-password">
                            <p class="password">Password</p>
                            <input style={{ fontSize: "32px" }} type="password"
                                onChange={(e) => {
                                    this.setState({
                                        password: e.target.value
                                    })
                                }} />
                        </div>
                    </div>
                    <div class="remember-forgot-pass">
                        <div class="remember-me"></div>
                        <p class="forgot-password">Forgot Password</p>
                    </div>
                    <div class="regis-sign">
                        {/* <Link to={"/mainpage"}> */}
                        <a class="box-login">
                            <button type="submit" onClick={this.loginId}>Login</button>
                        </a>
                        {/* </Link> */}
                        <Link to={"/register"}>
                            <a class="box-signUp">
                                <p class="text-signUp">Sign Up</p>
                            </a>
                        </Link>
                    </div>
                    <footer class="faded-phrase">
                        <p class="phrase">By signing up, you agree to Book’s Terms and Conditions & Privacy Policy</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Login)