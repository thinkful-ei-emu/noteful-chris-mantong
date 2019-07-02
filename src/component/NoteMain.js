import React from 'react';

function NoteMain({notes, noteId}) {
    const newNote = notes.map(note => note.id === noteId ? (
        <div>
            <div>{note.name}</div>
            <div>Date modified on {note.modified}</div>
            <button>Delete Note</button>
            <p>{note.content}</p>
        </div>
        ) : '' )
    return <div>{newNote}</div>
}

export default NoteMain;