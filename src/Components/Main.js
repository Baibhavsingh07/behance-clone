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
  const [selectedFilter, setSelectedFilter] = useState(null);

  const galleryItems = [
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtxT5HXwgohzcdupToyBdnb27h4LlW1sexA&s",
      title: "JS Clock",
      author: "Olivia Martinez",
      likes: 68,
      views: 880,
      category: "Javascript",
      timeCreated: 1624263600000,
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
      timeCreated: 1630380000000,
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
      timeCreated: 1635765600000,
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
      timeCreated: 1640991600000,
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
      timeCreated: 1647942000000,
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
      timeCreated: 1650932400000,
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
      timeCreated: 1656130800000,
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
      timeCreated: 1661094000000,
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
      timeCreated: 1666825200000,
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
      timeCreated: 1672158000000,
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
      timeCreated: 1677068400000,
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
      timeCreated: 1681498800000,
      recommended: false,
    },
  ];

  const sortGalleryItems = (items) => {
    switch (selectedFilter) {
      case "recommended":
        return items.filter((item) => item.recommended);
      case "liked":
        return items.slice().sort((a, b) => b.likes - a.likes);
      case "viewed":
        return items.slice().sort((a, b) => b.views - a.views);
      case "recent":
        return items.slice().sort((a, b) => b.timeCreated - a.timeCreated);
      default:
        return items;
    }
  };

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
        setSelectedFilter={setSelectedFilter}
      />
      <Gallery
        galleryItems={sortGalleryItems(
          galleryItems.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )}
        openModal={openModal}
      />

      {galleryItems &&
        galleryItems
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          ?.map((item, index) => (
            <Modal
              key={index}
              modalVisible={modalVisible && modalImage === item.imgSrc}
              closeModal={closeModal}
              modalImage={modalImage}
              modalCaption={modalCaption}
              item={item}
            />
          ))}
    </main>
  );
};

export default Main;
