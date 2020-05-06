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
  getName:[],
  getRepo:[],
  show:true
}
let dataRefRepo = database.collection('repositories');   
console.log(dataRefRepo);

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

   dataRefRepo.get()
     .then(doc => {   
     if (doc.empty) {
       console.log('Not in the cloud!');
       return;
     } 
      //console.log('Document data:', doc);
      doc.forEach(i =>{
       console.log(i.data());
        let newDataRepo= i.data();
        defaultState.getRepo.push(newDataRepo.iconUrl)
       })
   }) 
   

   function showProducts(state = defaultState) {
    return {
      type: 'DATA_GET',
      getName:state.getName

    }
  }
  function showRepoProducts(state = defaultState) {
    return {
      type: 'DATA_REPO',
      getRepo:state.getRepo

    }
  }
  function hideProducts() {
    return {
     type: 'DATA_HIDE'
    }
  }
const reducer = (state = defaultState, action = {}) =>{
  switch(action.type){
    case 'DATA_GET':
      return showProducts();
    case 'DATA_HIDE':
       return hideProducts();
    case 'DATA_REPO':
       return showRepoProducts();
      default:
       return state;
  }
}
const StoreContext = createContext(null);

export function StoreProvider({children}){
  const [state, dispatch]= useReducer(reducer, defaultState);
  const value = {state, dispatch};
  
  return <StoreContext.Provider value={value} onMouseOver={showProducts() ? showRepoProducts() : 'ON' } onMouseLeave={hideProducts()}>

    {children}</StoreContext.Provider>
}
export const useStore = () => useContext(StoreContext);
