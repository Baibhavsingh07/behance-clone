import React from "react";
import "./Modal.css";

const Modal = ({
  modalVisible,
  closeModal,
  modalImage,
  modalCaption,
  item,
}) => {
  if (!modalVisible) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <img className="modal-image" src={modalImage} alt={modalCaption} />
        <div className="modal-details">
          <h2 className="modal-title">{item.title}</h2>
          <div className="modal-author">{item.author}</div>
          <div className="modal-likes">Likes: {item.likes}</div>
          <div className="modal-time">
            Created: {formatTime(item.timeCreated)}
          </div>
          <div className="modal-caption">{modalCaption}</div>
        </div>
      </div>
    </div>
  );
};

// Function to format timestamp to readable date
const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString(); // Adjust format as needed
};

export default Modal;
