import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
interface Repositories {
    id:string;
    description:string;
    iconUrl:string;
    longDescription:string;
    category:string;
    url:string;
}
const firebaseConfig = {
    apiKey: "AIzaSyCs6Mc6RAaILb6uw_RgnvWIED137gzWjIU",
    authDomain: "aimee-github.firebaseapp.com",
    databaseURL: "https://aimee-github.firebaseio.com",
    projectId: "aimee-github",
    storageBucket: "aimee-github.appspot.com",
    messagingSenderId: "996249239282",
    appId: "1:996249239282:web:d51d596c4789c02d221a6b"
  };
  
 const app = firebase.initializeApp(firebaseConfig);

 const database = firebase.firestore(app);

 database.doc('repositories/xUfbPvfJ8rg3CiYi4gOe').get()
 .then(querySnapshot =>{
    let form = [];
    form.push({
    id:querySnapshot.id,
    config:querySnapshot.data()
    })
     console.log(form);
 });
  
const initialState = {
    id: 1,
    decription:'TypeScript with Hoc is wicked cool!'
  }

    
type State = Readonly<typeof initialState>;


const repoHoc = (WrappedComponent: any)=> {

    class repoHOC extends Component<{}, State>{

        readonly state: State = initialState;
      
        render(){
            return(
                <WrappedComponent id={this.state.id} description={this.state.decription}/>
            )
        }
    }  
      return repoHOC;
}
export default repoHoc;