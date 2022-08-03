import "./App.css";
import Home from "./components/Home/Home";
import Exhibitions from "./components/Exhibitions/Exhibitions";
import Signup from "./components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artists from "./components/Artists/Artists";

import { useEffect, useState } from "react";
// import CreateItem from "./components/CreateItem/CreateItem";

function App() {
  const [images, setImages] = useState([]);
  

 
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
          <Route path="Exhibitions" element={<Exhibitions />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
