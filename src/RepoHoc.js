import React, { Component } from 'react';
import './RepoHoc.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.apiKey,
    projectId: "aimee-github"
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
    const nameArray = [];
    for ( let key in this.state.data) {
        nameArray.push( {
            id: key,
            config: this.state.data[key]
        } );
    }
    console.table(nameArray)
        const showNames = nameArray.map(nameElement => (
            <div key={nameElement.id}>
             <p> {nameElement.id}) {nameElement.config.name}</p>
               </div>)        
            )           
    return(
        <div className="repo">
        <p>Example Firestore Cloud DB 
            <br/> on show on site:</p>
        {showNames}
        </div>
    );
 }
}

export default RepoHoc;