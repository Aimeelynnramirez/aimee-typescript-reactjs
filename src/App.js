import React, { Component } from 'react';
import './App.css';
import Message from './Message';
import RepoHoc from './RepoHoc';


class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">     
        <RepoHoc/>
        <Message/>     
      </header>
    </div>
   );

  }
}

export default App;
