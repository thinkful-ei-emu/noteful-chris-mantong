import React from 'react';

function Main({notes}) {
    const newNote = notes.map(note => (
        <div>
            <div>{note.name}</div>
            <div>Date modified on {note.modified}</div>
            <button>Delete Note</button>
        </div>
        )
    )
    return <div>{newNote}</div>
}

export default Main;