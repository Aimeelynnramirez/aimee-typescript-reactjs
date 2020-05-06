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

const repoArray = [];
for ( let key in state.getRepo) {
    repoArray.push( {
        id: parseInt(key) + 1,
        repo: state.getRepo[key]
    } );
}

//console.log(repoArray);

const showNames = nameArray.map(nameElement => (
    <div key={nameElement.id}>
     <p> {nameElement.id}) {nameElement.name}</p>
       </div>)        
    ) 
    const showRepos = repoArray.map(repoElement => {
      return<img src= {repoElement.repo} key={repoElement.id} alt="fruits" />
    });
 return(
  
<section className="repo">
    <p>Example Firestore Cloud DB 
       <br/> on show on site without auth:</p>
       <div className= "centerButton">
       <div value={state.getRepo}>
       <div className= "images">
        {showRepos}
        </div>
        <button onClick={() => dispatch({type:'DATA_GET'})}>Show Names</button>
        <button onClick={() => dispatch({type:'DATA_REPO'})}>Show Images</button>
        <button onClick ={() => dispatch({type:'DATA_HIDE'})}>Hide</button>
        </div>
        <div value={state.getName}>
        {showNames}
          </div>
          </div>
    </section>
      );
   }