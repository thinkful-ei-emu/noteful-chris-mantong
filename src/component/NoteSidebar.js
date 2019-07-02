import React from 'react';

function NoteSidebar(props) {
    const folderId = props.notes.map(note => note.id === props.match.params.noteId)
    const folder = props.folders.map(folder => folder.id === props.match.params.noteId ? 
        <h2 key={folder.id}>{folder.name}</h2> : '')
    return (
    <div>
        {folder}
    </div>
    )
}

export default NoteSidebar;