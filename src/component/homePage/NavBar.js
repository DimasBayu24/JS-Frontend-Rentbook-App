import React from 'react'


const Navbar = () => {
    const openNav = () => {
        // document.getElementById("mySidenav").style.width = "100%";
        if (window.matchMedia("(max-width: 1200px)").matches) {
            document.getElementById("mySidebar").style.width = "100%";
            document.getElementById("main").style.marginLeft = "0";
            document.getElementById("openSidebar").style.display = "none";
        } else {
            document.getElementById("mySidebar").style.width = "300px";
            document.getElementById("main").style.marginLeft = "300px";
            document.getElementById("openSidebar").style.display = "none";
        }

        return false;

    }
    return (
        
        <div className="top-nav-container">
        <nav className="top-nav">
          <ul>
            <li id="openSidebar">
              <div className="topnav-btn">
                <i onClick={openNav} className="fas fa-bars"></i>
              </div>
            </li>
            <li>
              All Categories <i className="fa fa-caret-down"></i>
            </li>
            <li>
              All Time <i className="fa fa-caret-down"></i>
            </li>
            <li>
              <input
                style={{ fontFamily: "Arial, FontAwesome" }}
                type="text"
                placeholder="&#xf002; Search book"
              />
            </li>
          </ul>
          <a>
            <img className="logo" src={require('../../storage/img/bookshelfLogo.png')} alt="logo.png" />
          </a>
        </nav>
      </div>
    )
}

export default Navbar