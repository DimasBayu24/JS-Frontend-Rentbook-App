import React from 'react'
import { getSortGenre, getSortDate, getAvail } from '../../redux/actions/books'
import { useDispatch } from 'react-redux'


const Navbar = () => {
  const dispatch = useDispatch()

  const getGenre = () => {
    dispatch(getSortGenre())
  }

  const getDate = () => {
    console.log(getDate);

    dispatch(getSortDate())

  }

  const getAvailability = () => {
    dispatch(getAvail())
  }

  const openNav = () => {
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
          <li className="nav-item-category">
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <button onClick={getGenre}>Sort by Genre</button>
              </li>
              <li>
                <button onClick={getDate}>Sort by Date</button>
              </li>
              <li>
                <button onClick={getAvailability}>Sort by Availability</button>
              </li>
            </ul>

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