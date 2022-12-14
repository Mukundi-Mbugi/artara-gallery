import React from "react";
import user from "./user.svg";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Footer from "../Footer/Footer";
import CreateItem from "../CreateItem/CreateItem";
import EditItem from "../EditItem/EditItem";
import { useNavigate } from "react-router-dom";

function Dashboard({
  artist,
  arts,
  onCreateArt,
  onDeleteArt,
  onUpdateArt,
  setUser,
}) {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  function handleFormDisplay() {
    setShowForm(!showForm);
  }

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
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
              <button className="create-item-btn" onClick={handleFormDisplay}>
                create new project
              </button>
              {showForm && (
                <CreateItem
                  setShowForm={setShowForm}
                  artist={artist}
                  onCreateArt={onCreateArt}
                />
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 items">
              {arts.map((art) => (
                <div key={art.id}>
                  <EditItem
                    art={art}
                    onDeleteArt={onDeleteArt}
                    onUpdateArt={onUpdateArt}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 log" logout-btn>
              <button id="logout-btn" onClick={handleLogout}>
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
