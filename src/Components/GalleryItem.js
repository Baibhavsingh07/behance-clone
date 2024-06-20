import React from "react";
import "./GalleryItem.css";

const GalleryItem = ({ item, openModal }) => {
  return (
    <div
      className="gallery-item"
      onClick={() => openModal(item.imgSrc, item.title)}
    >
      <img src={item.imgSrc} alt={item.title} />
      <div className="info">
        <div className="title">{item.title}</div>
        <div className="author">{item.author}</div>
        <div className="actions">
          <button className="like-btn">❤️ {item.likes}</button>
          <span className="views">{item.views} views</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
