import React, { Component } from 'react';
import './App.css';
import Message from './Message';
import Repo from './Repo';
import {StoreProvider} from './RepoHoc';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">  

        <StoreProvider> <Repo/></StoreProvider>
        <Message/>     
      </header>
    </div>
   );

  }
}

export default App;
