import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Item from "../Item/Item";
// import { useState } from "react";
import Footer from "../Footer/Footer";

function Home({ images, setShowCard, showCard }) {
  return (
    <>
      <Navbar />
      <div className="container gallery-container">
        {images.map((image) => (
          <Item image={image} showCard={showCard} setShowCard={setShowCard} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
