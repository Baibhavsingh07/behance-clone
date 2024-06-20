// Modal.js

import React from "react";
import "./Modal.css";

const Modal = ({ modalVisible, closeModal, modalImage, modalCaption }) => {
  if (!modalVisible) return null;

  return (
    <div id="modal" className="modal" onClick={closeModal}>
      <span className="close">&times;</span>
      <img className="modal-content" src={modalImage} alt={modalCaption} />
      <div id="caption">{modalCaption}</div>
    </div>
  );
};

export default Modal;
