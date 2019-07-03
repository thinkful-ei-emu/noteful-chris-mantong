import React from 'react';
import { Link } from 'react-router-dom'
import './FolderSidebar.css';

function FolderSidebar(props) {
    const folder = props.folders.map(folder => folder.id === props.match.params.folderId ? 
        <li className="selected" key={folder.id}><Link to={`/Folder/${folder.id}`}>{folder.name}
        </Link></li> : <li><Link to={`/Folder/${folder.id}`}>{folder.name}</Link></li>)
    return (
    <div>
        <ul>
            {folder}        
        </ul>
        <div>
            <button>Add Folder</button>
        </div>
    </div>
    )
}

export default FolderSidebar;