import React from 'react';

function Sidebar({folders}) {
    const folder = folders.map(folder => <div><button key={folder.id}>{folder.name}</button></div>)
    return (
    <div>
        {folder}
        
    </div>
    )
}

export default Sidebar;