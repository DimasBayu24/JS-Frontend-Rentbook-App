import React from "react";
import "./DeleteModal.css";
import checkedLogo from "../../storage/img/checked.png";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { deleteBook } from '../../redux/actions/detail'

const mapStateToProps = (detail) => {
  return {
    detail
  }
}
const DeleteModal = props => {
  console.log(props.data.id);

  const deleteBookData = () => {
    props.dispatch(deleteBook(props.data.id))
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

export default connect(mapStateToProps)(DeleteModal);
