export const fetchNotes = async () => {
    const response = await fetch( 'http://localhost:7070/notes' );

    return await response.json();
};

export const addNote = async ( note ) => {
    await fetch( 'http://localhost:7070/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( note ),
    } );
};

export const deleteNote = async ( id ) => {
    await fetch( `http://localhost:7070/notes/${id}`, {
        method: 'DELETE',
    } );
};