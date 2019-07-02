import React from 'react';

function FolderMain({folder,notes}) {
    let newNote=notes.map(note=> {

    if (folder.id===note.id){
        return (<div>
            <div>{note.name}</div>
            <div>Date modified on {note.modified}</div>
            <button>Delete Note</button>
        </div>
        )
    }
})

    return <div>{newNote}</div>
}

export default FolderMain;