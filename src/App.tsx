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
let firstName: any = 'Aimee';*/

const warning = ():void => {
  console.log('Get warning message here.');
}
warning();

const initialState = {
  name:'Aimee'
}
const initialMessage ={
  message:'TypeScript is wicked!'
}

type State = Readonly<typeof initialState>;
type StateMessage = Readonly<typeof initialMessage>;

class App extends Component<any, State, StateMessage> {

 /* Lifecyles!
 UNSAFE_componentWillMount(){
      console.log('Almost there...');
  }
  componentDidMount(){
    console.log('Finally...here!');
  }*/

  readonly state: State = initialState;
  readonly stateMessage: StateMessage = initialMessage;

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>  
          The value {firstValue} is of {typeof firstValue} type!
        </p>
        <Message name={this.state.name} message={this.stateMessage.message}/>
      </header>
    </div>
  );

}
}

export default App;
