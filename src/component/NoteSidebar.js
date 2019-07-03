import React from 'react';


function NoteSidebar(props) {
    const note = props.notes.find(note => note.id === props.match.params.noteId)
    const folder = props.folders.map(folder => folder.id === note.folderId ? 
        <h2 key={folder.id}>{folder.name}</h2> : '')
    return (
    <div>
        <div>
            <button onClick={() => props.history.goBack()}>Go Back</button>
        </div>
        <div>{folder}</div>
    </div>
    )
}

export default NoteSidebar;