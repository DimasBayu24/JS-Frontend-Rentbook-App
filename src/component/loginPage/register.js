import { register } from '../../redux/actions/users'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import './register.css'


const mapStateToProps = (user) => {
    return {
        user
    }
}

class Register extends Component {
    state = {
        username: "",
        password: ""
    }

    registerId = () => {

        const { username, password } = this.state
        const user = {
            username,
            password
        }
        this.props.dispatch(register(user))
        this.props.history.push('/login')
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
                    <h3 className="textLogin">Register</h3>
                    <p className="sentenceLoginSmall">Welcome Back, Please Register to create your account</p>
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
                        <div class="box-fullName">
                            <p class="fullName">Full Name</p>
                            <input type="text" />
                        </div>
                        <div class="box-email">
                            <p class="email">Email</p>
                            <input type="text" />
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
                    <div class="regis-sign">
                        {/* <Link to={"/"}> */}
                        <a class="box-login">
                            <button type="submit" onClick={this.registerId}>Sign Up</button>
                        </a>
                        {/* </Link> */}
                        <a class="box-signUp">

                            <p class="text-login">Login</p>
                        </a>
                    </div>
                    <footer class="faded-phrase">
                        <p class="phrase">By signing up, you agree to Book’s Terms and Conditions & Privacy Policy</p>
                    </footer>
                </div>
            </div>

        )


    }
}
export default connect(mapStateToProps)(Register)