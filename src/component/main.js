import React from 'react';
import { Link } from 'react-router-dom'

function Main({notes}) {
    const newNote = notes.map(note => (
        <li>
            <div><Link to={`/Note/${note.id}`}>{note.name}</Link></div>
            <div>Date modified on {note.modified}</div>
            <button>Delete Note</button>
            
        </li>
        )
    )
    return (
    <div>
        <ul>
            {newNote}
        </ul>
        <div>
            <button>Add note</button>
        </div>
    </div>
    )
}

export default Main;