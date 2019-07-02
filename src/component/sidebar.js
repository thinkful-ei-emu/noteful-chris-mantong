import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({folders}) {
    const folder = folders.map(folder => 
        <li key={folder.id}><Link to={`/Folder/${folder.id}`}>{folder.name}</Link></li>)
    return (
    <ul>
        {folder}
        
    </ul>
    )
}

export default Sidebar;