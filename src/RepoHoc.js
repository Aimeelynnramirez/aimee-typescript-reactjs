import React, { Component } from 'react';
import './RepoHoc.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCs6Mc6RAaILb6uw_RgnvWIED137gzWjIU",
    authDomain: "aimee-github.firebaseapp.com",
    databaseURL: "https://aimee-github.firebaseio.com",
    projectId: "aimee-github",
    storageBucket: "aimee-github.appspot.com",
    messagingSenderId: "996249239282",
    appId: "1:996249239282:web:d51d596c4789c02d221a6b"
  };
  
firebase.initializeApp(firebaseConfig);
//const settings = {timestampsInSnapshots:true}
//database.settings(settings);
const database = firebase.firestore();

 /* Query Data 
 database.doc('repositories/xUfbPvfJ8rg3CiYi4gOe').get()
 .then(querySnapshot =>{
let form = [];
form.push({
    id:querySnapshot.id,
    config:querySnapshot.data()
})
   
      const formMatch = form.map( select => {
        let storage = select.config
        console.log(storage);
        return storage;
    })   
    console.log(formMatch);

    });
  */
class RepoHoc extends Component{
    state = {
        getName:[]
    }
cloudDataHandler = () => {
 let dataRef= database.collection('user');   
 dataRef.get()
    .then(doc => {   
    if (doc.empty) {
      console.log('No such document!');
      return;
    } 
     // console.log('Document data:', doc);
     doc.forEach(i =>{
      // console.log(i.data().name);
       let newDataName = i.data();
       this.state.getName.push(newDataName)
      })
  //console.log( this.state.getName)
    this.setState({data:this.state.getName})
  }) 
}
   componentDidMount() {
    window.addEventListener('load', this.cloudDataHandler);
 }
render(){
    const submittedArray = [];
    for ( let key in this.state.data) {
        submittedArray.push( {
            id: key,
            config: this.state.data[key]
        } );
    }
   console.log("this is submitted: ", submittedArray);
        const showSubmitted = submittedArray.map(submittedElement => (
            <div key={submittedElement.id}>
             <p> {submittedElement.id}) {submittedElement.config.name}</p>
               </div>)
                )
    return(
        <div className="repo">
        {showSubmitted}
        </div>
    );
 }
}

export default RepoHoc;