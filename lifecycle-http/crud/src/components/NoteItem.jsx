const NoteItem = ( {note, onDelete} ) => {
    if ( ! note || ! note.content ) {
        return null; // Or you can render a fallback UI
    }

    return (
        <div className="note-item">
            <p>{note.content}</p>
            <button onClick={() => onDelete( note.id )} className="delete-btn">✖</button>
        </div>
    );
};

export default NoteItem;