import React from 'react';
import './FolderSidebar.css';

function FolderSidebar({folders, folderId}) {
    const folder = folders.map(folder => folder.id === folderId ? 
        <div className="selected"><button key={folder.id}>{folder.name}</button></div> : <div><button key={folder.id}>{folder.name}</button></div>)
    return (
    <div>
        {folder}
        
    </div>
    )
}

export default FolderSidebar;