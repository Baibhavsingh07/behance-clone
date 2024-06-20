// Main.js

import React, { useState } from "react";
import TopBar from "./TopBar";
import Gallery from "./Gallery";
import Modal from "./Modal";
import "./Main.css";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalCaption, setModalCaption] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const galleryItems = [
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "JS Clock",
      author: "Olivia Martinez",
      likes: 68,
      views: 880,
      category: "Javascript",
      timeCreated: 1624263600000, // Example timestamp for July 2021
      recommended: true,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "React Hero",
      author: "John Doe",
      likes: 120,
      views: 1050,
      category: "React",
      timeCreated: 1630380000000, // Example timestamp for September 2021
      recommended: false,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "Angular Power",
      author: "Alice Smith",
      likes: 85,
      views: 920,
      category: "Angular",
      timeCreated: 1635765600000, // Example timestamp for November 2021
      recommended: true,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "Vue Mastery",
      author: "Michael Brown",
      likes: 95,
      views: 1000,
      category: "Vue",
      timeCreated: 1640991600000, // Example timestamp for January 2022
      recommended: false,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "Bootstrap Bliss",
      author: "Emma Johnson",
      likes: 75,
      views: 890,
      category: "Bootstrap",
      timeCreated: 1647942000000, // Example timestamp for March 2022
      recommended: true,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "Svelte Magic",
      author: "David Williams",
      likes: 110,
      views: 980,
      category: "Svelte",
      timeCreated: 1650932400000, // Example timestamp for May 2022
      recommended: false,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "jQuery Legends",
      author: "Sophia Garcia",
      likes: 70,
      views: 910,
      category: "jQuery",
      timeCreated: 1656130800000, // Example timestamp for July 2022
      recommended: true,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "Ember Enigma",
      author: "Daniel Lee",
      likes: 80,
      views: 930,
      category: "Ember",
      timeCreated: 1661094000000, // Example timestamp for September 2022
      recommended: false,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "CSS Wizardry",
      author: "Lily Clark",
      likes: 105,
      views: 970,
      category: "CSS",
      timeCreated: 1666825200000, // Example timestamp for November 2022
      recommended: true,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "HTML Heroes",
      author: "Matthew Wilson",
      likes: 88,
      views: 940,
      category: "HTML",
      timeCreated: 1672158000000, // Example timestamp for January 2023
      recommended: false,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "TypeScript Treasures",
      author: "Sophie Brown",
      likes: 92,
      views: 960,
      category: "Typescript",
      timeCreated: 1677068400000, // Example timestamp for March 2023
      recommended: true,
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "Django Delights",
      author: "Lucas Green",
      likes: 78,
      views: 900,
      category: "Django",
      timeCreated: 1681498800000, // Example timestamp for May 2023
      recommended: false,
    },
  ];

  const openModal = (imgSrc, caption) => {
    setModalVisible(true);
    setModalImage(imgSrc);
    setModalCaption(caption);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter suggestions based on input value
    const filteredSuggestions = galleryItems.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    setSuggestions([]);
  };

  return (
    <main>
      <TopBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        suggestions={suggestions}
        handleInputChange={handleInputChange}
        handleSuggestionClick={handleSuggestionClick}
      />
      <Gallery
        galleryItems={galleryItems.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        openModal={openModal}
      />
      {galleryItems
        .filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item, index) => (
          <Modal
            key={index}
            modalVisible={modalVisible && modalImage === item.imgSrc}
            closeModal={closeModal}
            modalImage={modalImage}
            modalCaption={modalCaption}
          />
        ))}
    </main>
  );
};

export default Main;