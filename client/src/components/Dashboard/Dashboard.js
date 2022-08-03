import React from "react";
import user from "./user.svg";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Dashboard() {

  function handleLogout(){
    fetch(`http://localhost:3000/logout`, {
      method: "DELETE",
    })
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
            <button className="create-item-btn">create new project</button>
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
