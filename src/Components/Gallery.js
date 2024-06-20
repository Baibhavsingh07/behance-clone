import React from "react";
import GalleryItem from "./GalleryItem";
import "./Gallery.css";

const Gallery = ({ galleryItems, openModal }) => {
  return (
    <div className="gallery">
      {galleryItems.map((item, index) => (
        <GalleryItem key={index} item={item} openModal={openModal} />
      ))}
    </div>
  );
};

export default Gallery;
