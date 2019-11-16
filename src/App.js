import React, { Component } from 'react';
import './App.css';
import Story from './Story/Story' ;
import Media from './Media/Media' ;
import Music from './Music/Music' ;
import './css/Header.css'


class  App extends Component {
state = {

}

  render( ) {  return (
      <div className="App">
        <Story />
        <Media />
        <     Music />

      </div>
    );
  }
}


export default App;
