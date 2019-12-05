import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

let firstValue:string = 'Aimee';

class App extends Component<any> {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>  
          The value {firstValue} is of {typeof firstValue} type!
        </p>

        <Message/>
        
      </header>
    </div>
  );

}
}

export default App;
