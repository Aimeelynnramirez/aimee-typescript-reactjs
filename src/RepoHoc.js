import React, { createContext, useReducer, useContext } from 'react';
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
const defaultState = {
  getName:[]
}

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
        defaultState.getName.push(newDataName.name)
       })
   }) 
   
const reducer = (state = defaultState, action = {}) =>{
  switch(action.type){
    case 'DATA_GET':
      return {...state, getName:state.getName};
      default:
       return state;
  }
}
const StoreContext = createContext(null);

export function StoreProvider({children}){
  const [state, dispatch]= useReducer(reducer, defaultState);
  const value = {state, dispatch};
  
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore = () => useContext(StoreContext);
