import React from 'react';

export default class Main extends React.Component{

    render(){
        return(
        <div>
            
          <h1>Note 1</h1>
          <a> Date Modified on {this.state.note.modified} </a>
          <button type ="delete"> Delete Note</button>

        </div>
        );
    }
}