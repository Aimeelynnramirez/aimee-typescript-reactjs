import React from 'react';
import repoHoc from './RepoHoc';
/*interface UserRepositories {
    id:string;
    description:string;
    iconUrl:string;
    longDescription:string;
    category:string;
    url:string;
}
*/
const example = (props: any):any => <li>{props.id}) <br/> Description: {props.description}</li>


const Repositories = repoHoc(example);

export default Repositories;