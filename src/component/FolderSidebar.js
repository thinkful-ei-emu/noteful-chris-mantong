import React from 'react';

function FolderSidebar({folders}) {
    const folder = folders.map(folder => <div><button onClick={folder.name} key={folder.id}>{folder.name}</button></div>)
    return (
    <div>
        <button type="button">Add folder</button>
        {folder}
        
    </div>
    )
}

export default FolderSidebar;