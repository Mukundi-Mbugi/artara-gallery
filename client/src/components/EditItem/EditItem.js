import React from "react";
import "./EditItem.css"
import { useState } from "react";
import UpdateForm from "../UpdateForm/UpdateForm";


function EditItem({ art, onDeleteArt, onUpdateArt }) {
    const [showForm, setShowForm] = useState(false);
    

    function handleFormShow() {
        setShowForm(!showForm);
    }

    function handleDelete(){
        fetch(`/items/${art.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteArt(art.id);
            }
        });
    }


  return (
    <div>
      <div className="card-container">
        <div className="card-image">
          <h4>{art.title}</h4>
          <img src={art.image_url} alt="avatar" id="avatar" />
          <p>{art.description}</p>
        </div>
        <div className="card-buttons">
          <i class="material-icons" onClick={handleDelete}>delete</i>
          <i class="material-icons"onClick={handleFormShow}>edit</i>
        </div>
        {showForm && (
            <UpdateForm art={art} onUpdateArt={onUpdateArt} setShowForm={setShowForm} />
        )}
      </div>
    </div>
  );
}
export default EditItem;
