import React from "react";
import { useState } from "react";
import "./Item.css";

function Item({ image }) {
  const [showCard, setShowCard] = useState(false);
  return (
    <div key={image.id} >
      <div className="image-card">
      <img
        src={image.image_url}
        alt="avatar"
        id="avatar"
        onClick={() => setShowCard(!showCard)}
      />
      </div>
      {showCard ? (
        <div>
          <div className="card" key={image.id}>
            <div className="card-image">
              <h4>{image.title}</h4>
              <img src={image.image_url} alt="avatar" id="avatar" />
              <p>{image.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Item;
