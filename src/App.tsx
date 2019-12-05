import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';
import Repositories from './repositories';


let firstValue:string = 'Aimee';

class App extends Component<any> {
  render(){

   //db.doc('repositories/xUfbPvfJ8rg3CiYi4gOe').get().then(snaps => console.log(snaps.docs.map(snap => snap.data()//snap.id));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>  
        <Repositories/>
          The value {firstValue} is of {typeof firstValue} type!
        </p>

        <Message/>
        
      </header>
    </div>
  );

}
}

export default App;
