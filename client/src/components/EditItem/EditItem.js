function EditItem({ art, onDeleteArt, onUpdateArt }) {
    const [showForm, setShowForm] = useState(false);
    function handleDelete(){
        fetch(`/edit/${art.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteArt(art.id);
            }
        });
    }
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <h4>{art.title}</h4>
          <img src={art.url} alt="avatar" id="avatar" />
          <p>{art.description}</p>
        </div>
        <div className="card-buttons">
          <i class="material-icons" onClick={handleDelete}>delete</i>
          <i class="material-icons"onClick={handleEdit}>edit</i>
        </div>
      </div>
    </div>
  );
}
export default EditItem;
