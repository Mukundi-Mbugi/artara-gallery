import React from "react";
import user from "./user.svg";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import {useState} from "react";
import Footer from "../Footer/Footer";
import CreateItem from "../CreateItem/CreateItem";

function Dashboard({artist, arts, onCreateArt, onDeleteArt, onUpdateArt}) {
  const [showForm, setShowForm] = useState(false);
  console.log([artist, arts]);

  function handleFormDisplay(){
    setShowForm(!showForm);
  }

  function handleLogout({setArtist}){
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setArtist(null);
      }
    });
  }


  return (
    <>
    <Navbar />
    <div>
      <div className="container">
        <div className="row dash">
          <div className="col-md-3">
            <img src={user} alt="avatar" id="avatar" />
          </div>
          <div className="col-md-3">
            <button className="upload-btn">upload photo</button>
          </div>
          <div className="col-md-3">
            <button className="delete-btn">delete photo</button>
          </div>
          <div className="col-md-3">
            <button className="create-item-btn" onClick={handleFormDisplay}>create new project</button>
            {showForm && <CreateItem setShowForm={setShowForm} artist={artist} />}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 log">
            <button id="logout-btn" onClick={handleLogout}>logout</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Dashboard;
