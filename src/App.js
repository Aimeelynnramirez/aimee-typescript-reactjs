import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';
import RepoHoc from './RepoHoc';


let firstValue = 'Aimee';

class App extends Component {
  render(){

   //db.doc('repositories/xUfbPvfJ8rg3CiYi4gOe').get().then(snaps => console.log(snaps.docs.map(snap => snap.data()//snap.id));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>  
          The value {firstValue} is of {typeof firstValue} type!
        </p>
        <RepoHoc/>
        <Message/>
 
     
        
      </header>
    </div>
  );

}
}

export default App;
