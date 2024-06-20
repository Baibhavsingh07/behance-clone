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
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
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
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
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
        "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
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
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
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
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
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
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
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
        "https://plus.unsplash.com/premium_photo-1678565202188-f69b2e593998?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww",
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
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
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
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
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
        "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWN0fGVufDB8fDB8fHww",
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
        "https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
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
