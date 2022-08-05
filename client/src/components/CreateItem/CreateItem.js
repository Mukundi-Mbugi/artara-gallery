import React from "react";
import { useState } from "react";
import "./CreateItem.css";

function CreateItem({ artist, setShowForm, onCreateArt }) {
  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");

  console.log(artist);
  console.log(errors);

  function handleCreateItem(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        image_url,
        description,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => {
          onCreateArt(data);
          setShowForm(false);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
      <div className="create-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image Url</label>
          <input
            type="text"
            id="image"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            type="submit"
            className="submit-create-btn"
            onClick={handleCreateItem}
          >
            {isLoading ? "Loading..." : "Submit Item"}
          </button>
          {/* <div>
            {errors.map((err) => (
              <p key={err}>{err}</p>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CreateItem;
