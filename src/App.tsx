import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

let firstValue:string = 'Aimee';

/*let firstNumber:number = 28;
let firstBool: boolean = true;
let firstNewBool:number[] = [2,3,28];
let firstString: Array<string> = ['2','3','28'];
//tuple
let aTuple:[string, number] = ['Aimee', 28];
//enum
enum Codes { first =1 , second=2};
//any
let firstName: any = 'Aimee';

const warning = ():void => {
  console.log('Get warning message here.');
}
warning();
*/
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
