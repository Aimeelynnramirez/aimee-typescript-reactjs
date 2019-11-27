import React from 'react';
import messageHoc from './Hoc';

/*interface UserMessage {
    name:string;
    message:string;
}
const Message = (prop: UserMessage): any => {
    return(
    <h1>{prop.name} is saying, {prop.message}</h1>
    );
}*/

const example = (props: any):any => <h1>{props.name} is saying, {props.message}</h1>


const Message = messageHoc(example);

export default Message;