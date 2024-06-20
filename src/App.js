// App.js

import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main"; // Assuming Main component also needs to be rendered
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
