import React from "react";
import { useState } from "react";

function UpdateForm({ art, setShowForm, onUpdateArt }) {
    const [title, setTitle] = useState(art.title);
    const [image_url, setImage_url] = useState(art.image_url);
    const [description, setDescription] = useState(art.description);


    function handleUpdate(){
        fetch(`/items/${art.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                image_url,
                description,
            }),
        }).then((res) => res.json())
        .then((updatedArt) => {
          onUpdateArt(updatedArt);
          setShowForm(false)

        });
    }
    return (
        <div>
            <div className="card-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor="image">Image Url</label>
                <input type="text" id="image" value={image_url} onChange={(e) => setImage_url(e.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                <button onClick={handleUpdate}>Update</button>
                </div>
                </div>
        </div>
    )
}
export default UpdateForm;