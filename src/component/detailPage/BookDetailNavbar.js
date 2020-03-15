import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
const BookNavbar = props => {
  const history = useHistory();

  function handleClick() {
    history.push("/mainpage");
  }
  const editModal = () => {
    // Get the modal
    let editModal = document.getElementById("editModal");

    // Get the button that opens the modal
    let editBtn = document.getElementById("edit");

    // Get the <span> element that closes the modal
    let editSpan = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    editBtn.onclick = function() {
      editModal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    editSpan.onclick = function() {
      editModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === editModal) {
        editModal.style.display = "none";
      }
    };
    return false;
  };

  const deleteModal = () => {
    // Get the modal
    let deleteModal = document.getElementById("deleteModal");

    // Get the button that opens the modal
    let deleteBtn = document.getElementById("delete");

    // Get the <span> element that closes the modal
    let deleteSpan = document.getElementsByClassName("close")[1];

    // When the user clicks the button, open the modal
    deleteBtn.onclick = function() {
      deleteModal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    deleteSpan.onclick = function() {
      deleteModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === deleteModal) {
        deleteModal.style.display = "none";
      }
    };
    return false;
  };

  return (
    <div>
      <div>
        <Helmet>
          <title>{props.data.title}</title>
        </Helmet>
      </div>
      <section className="cover-image-container">
        <img src={props.data.img} alt="book-cover" />
        <nav className="top-navbar">
          <div className="back-button">
            <button onClick={handleClick}>
              <i className="fa fa-arrow-circle-left"></i>
            </button>
          </div>
          <div className="menu-items">
            <ul>
              <li>
                <button
                  onClick={editModal}
                  id="edit"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  src="#"
                >
                  Edit
                </button>
              </li>
              <li>
                <button
                  onClick={deleteModal}
                  id="delete"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  src="#"
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default BookNavbar;
