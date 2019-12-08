import React from 'react';
import {useStore} from './RepoHoc';


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
        {showNames}
        <div value={state.getName}>
          <button onClick={() => dispatch({type:'DATA_GET'})}>Show the reduced list</button>
        </div>
    </section>
      );
   }