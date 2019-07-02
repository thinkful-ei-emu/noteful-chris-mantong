import React from 'react';

function NoteSidebar({folders, folderId}) {
    const folder = folders.map(folder => folder.id === folderId ? 
        <h2 key={folder.id}>{folder.name}</h2> : '')
    return (
    <div>
        {folder}
    </div>
    )
}

export default NoteSidebar;