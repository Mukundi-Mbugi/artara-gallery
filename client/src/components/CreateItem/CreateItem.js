import React from 'react';
import {useState} from 'react';
import "./CreateItem.css"

function CreateItem() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
  return (
    <div>
        <div className="create-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text"  id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text"  id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit" className="submit-create-btn">Submit</button>
                </div>
            
        </div>
    </div>
  )
}

export default CreateItem