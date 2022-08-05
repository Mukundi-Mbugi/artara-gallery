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
  const [arts, setArts] = useState([]);
  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setArts(data)});
  }, []);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);


  function handleCreateArt(updatedArts) {
    console.log(updatedArts);
    const updatedArtObj = [...arts, updatedArts];
    setArts(updatedArtObj);
  }

  function handleDeleteArt(id) {
    const updatedArts = arts.filter((art) => art.id !== id);
    setArts(updatedArts);
  }

  function handleUpdateArt(editedArts) {
    const updatedArtObj = arts.map((blog) => {
      if (blog.id === editedArts.id) {
        return editedArts;
      }
      return blog;
    });
    setArts(updatedArtObj);
  }

  

 
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home arts={arts}/>} />
          <Route path="Artists" element={<Artists />} />
          <Route path="Exhibitions" element={<Exhibitions artist={user} />} />
          <Route path="Signup" element={<Signup setUser={setUser} />} />
          <Route path="Dashboard" element={<Dashboard 
          artist={user}
          arts={arts} 
          setUser={setUser}
          onCreateArt={handleCreateArt}
          onDeleteArt={handleDeleteArt}
          onUpdateArt={handleUpdateArt}
           />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
