import React from 'react';
import {useStore} from './RepoHoc';
import './Repo.css';
export default function Repo(){
    
const {state, dispatch} = useStore();
  

const nameArray = [];
for ( let key in state.getName) {
    nameArray.push( {
        id: parseInt(key) + 1,
        name: state.getName[key]
    } );
}

const showNames = nameArray.map(nameElement => (
    <div key={nameElement.id}>
     <p> {nameElement.id}) {nameElement.name}</p>
       </div>)        
    ) 

 return(
  
<section className="repo">
    <p>Example Firestore Cloud DB 
       <br/> on show on site without auth:</p>
       <div value={state.getName}>
        {showNames}
        <div className= "centerButton">
          <button onClick={() => dispatch({type:'DATA_GET'})}>Show</button>
         <button onClick ={() => window.location.reload()}>Hide</button>
          </div>
          </div>
    </section>
      );
   }