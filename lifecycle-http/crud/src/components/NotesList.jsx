import NoteItem from "./NoteItem";

const NotesList = ( {notes, onDelete} ) => {
    return (
        <div className="notes-list">
            {notes.map( ( note ) => (
                <NoteItem key={note.id} note={note} onDelete={onDelete}/>
            ) )}
        </div>
    );
};

export default NotesList;