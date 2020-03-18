import React from "react";
import "./DeleteModal.css";
import checkedLogo from "../../storage/img/checked.png";
import Axios from "axios";
import { Link } from "react-router-dom";

const URL_STRING = "/api/v1/";
const DeleteModal = props => {
  const deleteBookData = () => {
    Axios.delete(URL_STRING + props.data.id)
      .then(result => {
        console.log(result);
        console.log("Data has been deleted!");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div id="deleteModal" className="delete-modal">
      <div className="delete-modal-content">
        <div className="delete-modal-header">
          <Link to='/mainpage'> <span onClick={deleteBookData} className="close">
            &times;
          </span></Link>
        </div>
        <div className="delete-modal-body">
          <div className="body-wrapper">
            <img src={checkedLogo} alt="" srcSet="" />
            <h2>
              Data <span>{props.title}</span> Berhasil Dihapus!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
