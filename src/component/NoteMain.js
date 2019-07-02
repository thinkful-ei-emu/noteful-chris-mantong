import React from 'react';

function NoteMain(props) {
    const newNote = props.notes.map(note => note.id === props.match.params.noteId ? (
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