import React, { useState, useEffect } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import { fetchNotes, addNote, deleteNote } from './services/api';

function App() {
    const [notes, setNotes] = useState( [] );

    const loadNotes = async () => {
        const fetchedNotes = await fetchNotes();
        console.log(fetchedNotes);
        setNotes( fetchedNotes );
    };

    useEffect( () => {
        loadNotes();
    }, [] );

    const handleAddNote = async ( content ) => {
        await addNote( {id: 0, content} );
        await loadNotes();
    };

    const handleDeleteNote = async ( id ) => {
        await deleteNote( id );
        await loadNotes();
    };

    return (
        <div className="App">
            <h1>Notes</h1>
            <button onClick={loadNotes} className="refresh-btn">⟳</button>
            <NotesList notes={notes} onDelete={handleDeleteNote}/>
            <h2>New Note</h2>
            <NoteForm onAdd={handleAddNote}/>
        </div>
    );
}

export default App;
