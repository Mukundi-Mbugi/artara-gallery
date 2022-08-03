import "./App.css";
import Home from "./components/Home/Home";
import Exhibitions from "./components/Exhibitions/Exhibitions";
import Signup from "./components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artists from "./components/Artists/Artists";

import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
// import CreateItem from "./components/CreateItem/CreateItem";

function App() {
  const [images, setImages] = useState([]);
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setArtist(user));
      }
    });
  }, []);

 
  useEffect(() => {
    fetch("/index")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home images={images}/>} />
          <Route path="Artists" element={<Artists />} />
          <Route path="Exhibitions" element={<Exhibitions artist={artist} />} />
          <Route path="Signup" element={<Signup onLogin={setArtist} />} />
        </Routes>
      </BrowserRouter>
      <Dashboard setArtist={setArtist} />
    </div>
  );
}

export default App;
