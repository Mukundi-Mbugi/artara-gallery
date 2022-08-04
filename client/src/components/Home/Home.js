import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

function Home() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setArts(data)});
  }, []);

  return (
    <>
      <Navbar />
      <div className="container gallery-container">
        {arts.map((image) => (
          <div key={image.id}>
            <Item image={image}  />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
