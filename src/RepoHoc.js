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

const database = firebase.firestore();

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
            id: parseInt(key) + 1,
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
            <br/> on show on site without auth:</p>
        {showNames}
        </div>
    );
 }
}

export default RepoHoc;