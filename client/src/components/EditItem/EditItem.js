function EditItem({art, onDeleteArt, onUpdateArt}) {
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <h4>{art.title}</h4>
                    <img src={art.url} alt="avatar" id="avatar" />
                    <p>{art.description}</p>
                    </div>
                    <div className="card-buttons">
                    <button className="delete-btn" onClick={() => onDeleteArt(art.id)}>delete</button>
                    <button className="edit-btn" onClick={() => onUpdateArt(art.id)}>edit</button>
                    </div>
                    </div>
        </div>
    )
}
export default EditItem;