import React from 'react';
import { Link } from 'react-router-dom'

function Main({notes}) {
    const newNote = notes.map(note => (
        <div>
            <div><Link to={`/Note/${note.id}`}>{note.name}</Link></div>
            <div>Date modified on {note.modified}</div>
            <button>Delete Note</button>
            <button>Add note</button>
        </div>
        )
    )
    return <div>{newNote}</div>
}

export default Main;